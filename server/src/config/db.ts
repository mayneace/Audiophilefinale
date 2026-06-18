import mongoose from "mongoose";

const connectionDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`\n✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectionDB;

// mosesadebayour_db_user
// 4jP1ihhnisGzeUBH

// mongodb+srv://mosesadebayour_db_user:4jP1ihhnisGzeUBH@cluster0.p7iuhfd.mongodb.net/?appName=Cluster0
