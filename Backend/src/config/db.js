import mongoose from 'mongoose';
import { MONGO_URI } from './app.js';
import logger from '../utils/logger.js';

const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined. Add it to your .env file before starting the server.');
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    logger.info(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    logger.error(`Database connection failed: ${error.message}`);
    throw error;
  }
};

export default connectDB;
