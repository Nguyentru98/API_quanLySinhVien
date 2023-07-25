import {Router} from "express";
import studentsController from "../controller/studentsController";

const studentRouter = Router();
studentRouter.get('/', studentsController.findAll);
studentRouter.post('/add', studentsController.add);
studentRouter.put('/update/:id', studentsController.update);
studentRouter.delete('/delete/:id', studentsController.delete);
export default studentRouter;
