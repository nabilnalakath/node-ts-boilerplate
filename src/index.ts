import { app, port } from './app';
/**
 * Function to start the server.
 * Logs the port on which the server is running.
 */
const startServer = (): void => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

// To start the server
startServer();
