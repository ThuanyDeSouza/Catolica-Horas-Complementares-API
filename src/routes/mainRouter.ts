
import Injector from '../injector';
import StudentRouter from './student';
import Express from 'express'

const mainRouter = Express();
mainRouter.use("/student", new StudentRouter(Injector.Student()).getRouter())

export default mainRouter;