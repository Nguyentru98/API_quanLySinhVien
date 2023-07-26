import {Router} from "express";
import studentsController from "../controller/studentsController";

const studentRouter = Router();

studentRouter.get('/', studentsController.findStudents);
studentRouter.get('/', studentsController.findAll);
studentRouter.post('/add', studentsController.add);
studentRouter.put('/update/:id', studentsController.update);
studentRouter.delete('/delete/:id', studentsController.delete);
studentRouter.delete('/findByNmae/:id', studentsController.finByName);
studentRouter.get('/ASC', studentsController.ASC);
studentRouter.get('/DESC', studentsController.DESC);

export default studentRouter;
