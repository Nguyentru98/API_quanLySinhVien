import { Class } from "../entity/Class";
import {AppDataSource} from "../data-source";

class classService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(Class);
    }

    getAll = async () => {
        let Class = await this.Repository.find({
            relations : {
                Students : true
            }
        });
        return Class;
    }
    add = async (Class) => {
       await this.Repository.save(Class)
    }
    update = async ( id, Class) => {
       return await this.Repository.update(id, Class)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    finByName = async (name) => {
        return await this.Repository.finByName(name)
    }
   
}

export default new classService();
