"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let listStudent = await this.studentService.getAll();
            res.json(listStudent);
        };
        this.add = async (req, res) => {
            let data = await this.studentService.add(req.body);
            res.json("thêm thành công");
        };
        this.update = async (req, res) => {
            let data = await this.studentService.update(req.params.id, req.body);
            console.log(req.params.id);
            res.json("sửa thành công");
        };
        this.delete = async (req, res) => {
            let data = await this.studentService.delete(req.params.id);
            res.json("xóa thành công");
        };
        this.finByName = async (req, res) => {
            let data = await this.studentService.finByName(req.query.name);
            res.json(data);
        };
        this.ASC = async (req, res) => {
            let data = await this.studentService.ASC();
            res.json(data);
        };
        this.DESC = async (req, res) => {
            let data = await this.studentService.DESC();
            res.json(data);
        };
        this.findStudents = async (req, res) => {
            let data = await this.studentService.findStudent(req.query.name);
            res.json(data);
        };
        this.studentService = studentService_1.default;
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentsController.js.map