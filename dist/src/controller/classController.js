"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classService_1 = __importDefault(require("../service/classService"));
class ClassController {
    constructor() {
        this.findAll = async (req, res) => {
            let listclass = await this.classService.getAll();
            res.json(listclass);
        };
        this.add = async (req, res) => {
            let data = await this.classService.add(req.body);
            res.json("thêm thành công");
        };
        this.update = async (req, res) => {
            let data = await this.classService.update(req.params, req.body);
            res.json("sửa thành công");
        };
        this.delete = async (req, res) => {
            let data = await this.classService.delete(req.params.id);
            res.json("xóa thành công");
        };
        this.finByName = async (req, res) => {
            let data = await this.classService.finByName(req.query.name);
            res.json(data);
        };
        this.classService = classService_1.default;
    }
}
exports.default = new ClassController();
//# sourceMappingURL=classController.js.map