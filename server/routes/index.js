import {Router} from 'express';

import authRouter from './v1/auth';

const router = new Router();

router.use('/api/v1/auth', authRouter);

export default router;
