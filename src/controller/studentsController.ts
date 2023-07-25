import {Request, Response} from "express";
import studentService from "../service/studentService";
import * as fs from "fs";

class StudentController {
    private studentService;

    constructor() {
        this.studentService = studentService;
    }

    findAll = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.getAll();
        res.json(listStudent);
    }
    add = async (req: Request, res: Response) => { 
        let data = await this.studentService.add(req.body)
        res.json("thêm thành công");
    }
    update =async (req: Request ,res: Response) => {
        let data = await this.studentService.update(req.params.id, req.body)
        console.log(req.params.id)
        res.json("sửa thành công");
    }
    delete = async(req: Request, res: Response) => {
        let data = await this.studentService.delete(req.params.id)
        res.json("xóa thành công");
    }
    finByName = async ( req: Request, res: Response) => {
        let data = await this.studentService.finByName(req.query.name)
        res.json(data);
    }
    ASC = async(req: Request, res: Response)=>{
        let data = await this.studentService.ASC()
        res.json(data);
    }
    DSC = async(req: Request, res: Response)=>{
        let data = await this.studentService.DSC()
        res.json(data);
    }
}
export default new StudentController();
