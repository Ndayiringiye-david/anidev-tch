import 'dotenv/config';

import app from './src/app.js';
import connectDB from './src/config/db.js';
import { PORT } from './src/config/app.js';
import logger from './src/utils/logger.js';

const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
};

start().catch((err) => {
  logger.error('Failed to start server:', err.message);
  process.exit(1);
});
