import { Request, Response } from "express";
declare class StudentController {
    private studentService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    finByName: (req: Request, res: Response) => Promise<void>;
    ASC: (req: Request, res: Response) => Promise<void>;
    DSC: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
