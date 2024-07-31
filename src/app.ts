import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import dotenv from 'dotenv';
import * as swaggerDocument from '../swagger.json';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Middleware to parse JSON.
 */
app.use(express.json());

/**
 * Use the routes.
 */
app.use('/api', routes);

export { app, port };
