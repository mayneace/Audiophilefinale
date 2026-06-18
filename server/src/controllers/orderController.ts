// Handles all order operation:
// - createdOrder (anyone)
// - getUserOrder (logged-in user sees their own orders)
// - getOrderById (user sees their order, admin sees any)
// - getAllOrders (admin only)
// - updateOrderStatus (admin only)
// - getDashboardStats (admin only)

import { Request, Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../types/indexServer";
import Order from "../models/Order";

// ---- CREATE ORDER -----
// POST /api/orders
// Anyone (logged in or guest) can place order
export const createdOrder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { customerInfo, cartItems, orderSummary } = req.body;

    // validate required data is present

    if (!customerInfo || !cartItems || !orderSummary) {
      res.status(400).json({
        message:
          "Missing required fields: customerInfo, cartItems, or orderSummary",
      });
      return;
    }

    // validate cart is not empty
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      res.status(400).json({ message: "Cart must have at least one item" });
      return;
    }

    // validate each cart item has the required fields
    for (const items of cartItems) {
      if (
        !items._id ||
        !items.name ||
        items.price === undefined ||
        !items.quantity
      ) {
        res
          .status(400)
          .json({ message: "invalid cart item - missing required fields" });
        return;
      }
    }

    // Build the order summary
    const orderData: any = {
      customerInfo: {
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        address: customerInfo.address,
        zipCode: customerInfo.zipCode,
        city: customerInfo.city,
        country: customerInfo.country,
        paymentMethod: customerInfo.paymentMethod,
        eMoneyNumber: customerInfo.eMoneyNumber || "",
        eMoneyPIN: customerInfo.eMoneyPIN || "",
      },
      cartItems: cartItems.map((item: any) => ({
        // create a valid ObjectId for the productId
        productId: mongoose.Types.ObjectId.isValid(item._id)
          ? new mongoose.Types.ObjectId(item._id)
          : new mongoose.Types.ObjectId(),

        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.Image,
      })),
      orderSummary: {
        subtotal: orderSummary.subtotal,
        shipping: orderSummary.shipping,
        vat: orderSummary.vat,
        grandTotal: orderSummary.grandTotal,
      },
    };

    // if the request came from a logged-in user, attach their ID to the order
    // this lets users view their order history later
    const authReq = req as AuthRequest;
    if (authReq.user) {
      orderData.userId = authReq.user.directModifiedPaths;
    }

    const order = new Order(orderData);
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error: any) {
    console.error("created order error:", error);

    // Handle mongodb duplicate key error (rare but possible for orderId)

    if (error.code === 1100) {
      res.status(500).json({ message: "Order ID conflict - please try again" });
      return;
    }

    res.status(500).json({
      message: "Server error creating order",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

//  ----- GET USERS ORDERS ----
// GET /api/orders/my-orders
// Return all orders belonging to the logged-in user
export const getUserOrders = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    // Find orders where userId matches the logged-in user's ID
    const orders = await Order.find({ userId: req.user!._id } as any).sort({
      createdAt: -1,
    }); // Newest order comes first

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching your orders" });
  }
};

// ---- GET ORDER BY ID -----
// GET /api/orders/:id
export const getOrderById = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id as string)) {
      res.status(400).json({ message: "Invalid order iD" });
      return;
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({ message: "Order not Found" });
      return;
    }

    // Security check: non-admin users can only view their own orders
    if (
      !req.user?.isAdmin &&
      order.userId?.toString() !== req.user?._id.toString()
    ) {
      res.status(403).json({ message: "Not authorized to view this Order" });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching order" });
  }
};

//  ---- ADMIN: GET ALL ORDERS -----
// // GET /api/Admin/Orders
export const getAllOrders = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 }); // newest orders comes first
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching orders" });
  }
};

// --- Admin: Update Order Status ----
//  PUT /api/Admin/Orders/:id/status
export const updateOrderStatus = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { status } = req.body;

    // Validate the status value
    const validStatuses = ["pending", "processing", "shipped", "cancelled"];

    if (!validStatuses.includes(status)) {
      res.status(400).json({ message: "Invalid Order status" });
      return;
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({ message: "Order not Found" });
      return;
    }

    order.status = status;
    const updateOrder = await order.save();

    res.status(204).json(updateOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error updating order status" });
  }
};

// ---- Admin: Get Dashboard Stats ------
// Get //api/Admin/stats
// Return aggregate data for the admin dashboard
export const getDashboardStats = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    // Run multiple database queries in parallel using Promise.all
    // This is faster than running them one by one
    const [
      totalOrders, // Total number of orders
      totalUsers, // Total numbers of years
      revenueResult, // Sum of all order grand total
      pendingOrders, // Orders not yet fulfulled
      recentOrders, // Last 5 Orders for dashboard preview
    ] = await Promise.all([
      Order.countDocuments(),
      // we need to import User here - do it Online
      (await import("../models/User")).default.countDocuments(),

      //   MongoDb aggregation: sum up all grandtotals values
      Order.aggregate([
        {
          $group: {
            _id: null, // Group all document together.
            total: { $sum: "$orderSummary.grandTotal" }, // Sum the Grandtotal field
          },
        },
      ]),

      Order.countDocuments({ status: "pending" }),

      Order.find({}).sort({ createdAt: -1 }).limit(5),
    ]);

    // Monthly revenue for the past 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const MonthlyRevenue = await Order.aggregate([
      {
        // only include orders from past 6 months
        $match: { createdAt: { $gte: sixMonthsAgo } },
      },

      {
        // Group by year and month
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "createdAt" },
          },
          revenue: { $sum: "$orderSummary.grandTotal" },
          count: { $sum: 1 }, // count of orders that month
        },
      },

      { $sort: { "_id.year": 1, "_id.month": 1 } }, // sort oldest to newwest revenue
    ]);

    res.status(200).json({
      totalOrders,
      totalUsers,
      totalRevenue: revenueResult[0]?.total || 0, // Default to 0 if no orders
      pendingOrders,
      recentOrders,
      MonthlyRevenue,
    });
  } catch (error) {
    console.error("Dashboard stat error:", error);
    res.status(500).json({ message: "Server error fetching Dashboard status" });
  }
};
