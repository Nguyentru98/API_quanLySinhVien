import { Router } from "express";
import studentRouter from "./studentRouter";
import classRouter from "./classRouter";



const router = Router();
router.use('/students', studentRouter);
router.use('/class', classRouter);
export default router;
