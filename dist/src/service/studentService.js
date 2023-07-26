"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("../entity/Students");
const data_source_1 = require("../data-source");
class studentservice {
    constructor() {
        this.getAll = async () => {
            let students = await this.Repository.find({
                relations: {
                    class: true
                }
            });
            return students;
        };
        this.add = async (student) => {
            await this.Repository.save(student);
        };
        this.update = async (id, student) => {
            return await this.Repository.update(id, student);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.ASC = async () => {
            return await this.Repository.find({
                order: { score: 'ASC' }
            });
        };
        this.DESC = async () => {
            return await this.Repository.find({ order: { score: 'DESC' } });
        };
        this.findStudent = async (name) => {
            return await this.Repository.find({
                relations: {
                    class: true
                },
                where: {
                    name: name
                }
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(Students_1.Students);
    }
}
exports.default = new studentservice();
//# sourceMappingURL=studentService.js.map