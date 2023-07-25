import { Students } from "../entity/Students";
import {AppDataSource} from "../data-source";

class studentservice {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(Students);
    }

    getAll = async () => {
        let students = await this.Repository.find({
            relations : {
                class : true
            }
        });
        return students;
    }
    add = async (student) => {
       await this.Repository.save(student)
    }
    update = async ( id, student) => {
       return await this.Repository.update(id, student)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    finByName = async (name) => {
        return await this.Repository.finByName(name)
    }
    ASC = async () => {
        return await this.Repository.find({order: {socre: 'ASC'}})
    }
    DESC = async () => {
        return await this.Repository.find({order: {score: 'DESC'}})
    }
}

export default new studentservice();
