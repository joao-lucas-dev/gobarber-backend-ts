import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import userRouter from './users.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
