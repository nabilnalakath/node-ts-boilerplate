import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const mongoURI =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/mydatabase';

/**
 * Connect to the MongoDB database.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 * @throws {Error} Throws an error if the connection fails.
 */
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, {
      maxPoolSize: 10, // for setting pool size
    });
    console.log('MongoDB connected');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('Unexpected error', err);
    }
    process.exit(1);
  }
};

export default connectDB;
