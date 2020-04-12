import {Router} from 'express';
import {register, login} from '../../controllers/v1/auth.controllers';

const router = new Router();

router.post('/login', login);

router.post('/register', register);

export default router;
