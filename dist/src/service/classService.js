"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = require("../entity/Class");
const data_source_1 = require("../data-source");
class classService {
    constructor() {
        this.getAll = async () => {
            let Class = await this.Repository.find({
                relations: {
                    Students: true
                }
            });
            return Class;
        };
        this.add = async (Class) => {
            await this.Repository.save(Class);
        };
        this.update = async (id, Class) => {
            return await this.Repository.update(id, Class);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.finByName = async (name) => {
            return await this.Repository.finByName(name);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(Class_1.Class);
    }
}
exports.default = new classService();
//# sourceMappingURL=classService.js.map