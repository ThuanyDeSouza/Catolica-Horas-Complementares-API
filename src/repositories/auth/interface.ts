import {Request, Response, NextFunction} from 'express'


interface IAuthRepository {
    user(id: number, email: string, password: string) : Promise<Object> | never;
    coordinator(id: number, email: string, password: string) : Promise<Object> | never;
    login(email: string, password: string, coordinator: boolean) : Promise<Object> | never;
}

export default IAuthRepository;