"use server";

import connectToDatabase from "@/lib/database";
import LoveCount from "@/model/loveCount.model";

export async function getLoveCountServerAction() {
  try {
    await connectToDatabase();

    if (!process.env.MONGODB_URI) {
      return { success: true, count: 84 };
    }

    const loveDoc = await LoveCount.findOne({});
    return {
      success: true,
      count: loveDoc?.count ?? 84,
    };
  } catch (error) {
    return { success: true, count: 84 };
  }
}

export async function setLoveCountServerAction() {
  try {
    await connectToDatabase();
    const loveCount = await LoveCount.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    return {
      success: true,
      count: loveCount.count,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update love count",
    };
  }
}
