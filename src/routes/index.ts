import { Router } from 'express';
import helloRoute from './hello';

const router = Router();

router.use('/hello', helloRoute);

export default router;
