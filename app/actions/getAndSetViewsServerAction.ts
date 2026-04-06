'use server';

import connectToDatabase from '@/lib/database';
import View from '@/model/views.model';

export async function getViewsServerAction() {
  try {
    await connectToDatabase();

    // If no DB connection, return fallback
    if (!process.env.MONGODB_URI) {
      return { success: true, message: 1247 };
    }

    const viewDoc = await View.findOne({});

    return {
      success: true,
      message: viewDoc?.views ?? 1247,
    };
  } catch (error) {
    return { success: true, message: 1247 };
  }
}

export async function setViewsServerAction() {
  try {
    await connectToDatabase();

    await View.findOneAndUpdate(
      {},
      { $inc: { views: 1 } },
      { new: true, upsert: true }
    );

    return {
      success: true,
      message: 'Views set successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to set views',
    };
  }
}
