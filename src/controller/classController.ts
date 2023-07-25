import {Request, Response} from "express";
import classService from "../service/classService";
import * as fs from "fs";

class ClassController {
    private classService;

    constructor() {
        this.classService = classService;
    }

    findAll = async (req: Request, res: Response) => {
        let listclass = await this.classService.getAll();
        res.json(listclass);
    }
    add = async (req: Request, res: Response) => { 
        let data = await this.classService.add(req.body)
        res.json("thêm thành công");
    }
    update =async (req: Request ,res: Response) => {
        let data = await this.classService.update(req.params, req.body)
        res.json("sửa thành công");
    }
    delete = async(req: Request, res: Response) => {
        let data = await this.classService.delete(req.params.id)
        res.json("xóa thành công");
    }
    finByName = async ( req: Request, res: Response) => {
        let data = await this.classService.finByName(req.query.name)
        res.json(data)
    }
}
export default new ClassController();