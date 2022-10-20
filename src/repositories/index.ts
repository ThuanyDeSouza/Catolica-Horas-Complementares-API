import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../data-source';
import Model from '../model/interface';
import Student from '../model/user/student';
import IRepository from './interface'

export default class Repository implements IRepository {
    protected model: EntityTarget<Model>;
    constructor(model: EntityTarget<Model>) {
        this.model = model;
    }
    create = async (data: any): Promise<Object> => {
        throw new Error('Method not implemented.');
    }
    get = async (id: number): Promise<Object> => {
        return await AppDataSource.getRepository(this.model).findOneByOrFail({id: id});
    }
    index = async (): Promise<Object> => {
        const model = await AppDataSource.getRepository(this.model).find();
        return model;
    }
    update = async (id:number, data: any): Promise<Object> => {
        throw new Error('Method not implemented.');
    }
    destroy = async (id: number): Promise<Object> => {
        const obj =  await AppDataSource.getRepository(this.model).findOneByOrFail({id: id});
        const dead = await AppDataSource.getRepository(this.model).delete(obj.id);
        
        if(!dead.affected)  {
            throw "unhandled error"
        }
        return {
            Message: "deletion successfull"
        }
    }

}