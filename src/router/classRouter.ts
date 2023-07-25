import {Router} from "express";
import ClassController from "../controller/classController";

const ClassRouter = Router();
ClassRouter.get('/', ClassController.findAll);
ClassRouter.post('/add', ClassController.add);
ClassRouter.put('/update', ClassController.update);
ClassRouter.get('/delete', ClassController.delete);
export default ClassRouter;