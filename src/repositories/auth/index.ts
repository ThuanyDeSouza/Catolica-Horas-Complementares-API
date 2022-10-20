import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../../data-source';
import Model from '../../model/interface';
import User from '../../model/user';
import Coordinator from '../../model/user/coordinator';
import IAuthRepository from './interface';
import bcrypt from 'bcryptjs'

export default class AuthRepository implements IAuthRepository {
  private userInstance :User;
  private userModel: EntityTarget<User>;
  private coordinatorInstance : Coordinator;
  private coordinatorModel: EntityTarget<Coordinator>;
  constructor(userModel: EntityTarget<User>, userInstance: User, coordinatorModel: EntityTarget<Coordinator>, coordinatorInstance: Coordinator) {
    this.userModel = userModel;
    this.coordinatorModel = coordinatorModel;
    this.userInstance = userInstance;
    this.coordinatorInstance = coordinatorInstance;
  }
  login = async (email: string, password: string, coordinator: boolean): Promise<Object> =>{
    if(coordinator) {
      const user =  await AppDataSource.getRepository(this.userModel).findOneByOrFail({
        email: email
      });
      if(await bcrypt.compare(password, user.password)) {
        return user;
      }
      return false;
    }
      const coord =  await AppDataSource.getRepository(this.coordinatorModel).findOneByOrFail({
        email: email
      });
      if(await bcrypt.compare(password, coord.password)) {
        return coordinator;
      }
      return false
  } 
  user = async (id: number, email: string, password: string): Promise<Object> =>{
    const user =  await AppDataSource.getRepository(this.userModel).findOneByOrFail({
      id: id,
      email: email
    });
    if(await bcrypt.compare(password, user.password)) {
      return user;
    }
    return false;
  }
  coordinator = async (id: number, email: string, password: string): Promise<Object> =>{
    const coordinator =  await AppDataSource.getRepository(this.coordinatorModel).findOneByOrFail({
      id: id,
      email: email
    });
    if(await bcrypt.compare(password, coordinator.password)) {
      return coordinator;
    }
    return false
  }   
}