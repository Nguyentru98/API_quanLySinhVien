import { Request, Response } from "express";
declare class ClassController {
    private classService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    finByName: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ClassController;
export default _default;
