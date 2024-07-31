import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /hello
 *
 * @function
 * @memberof module:routes/hello
 * @name get/hello
 *
 * @description
 * Returns a JSON object with a "Hello, World!" message.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 *
 * @returns {void}
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
});

export default router;
