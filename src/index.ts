import { app, port } from './app';
import connectDB from './config/database';

/**
 * Function to start the server.
 * Logs the port on which the server is running.
 */
const startServer = (): void => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

/**
 * Connect to the database and start the server.
 * If the connection fails, logs the error and exits the process.
 */
const startServerWithDB = async (): Promise<void> => {
  try {
    await connectDB();
    startServer();
  } catch (err) {
    console.error('Failed to connect to the database', err);
    process.exit(1);
  }
};

// Uncomment one of the following lines depending on the requirement:

// To start the server with database connection:
startServerWithDB();

// To start the server without database connection:
// startServer();
