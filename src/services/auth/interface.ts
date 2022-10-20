import {Request, Response, NextFunction} from 'express'
import StatusData from '../../types/statusData';


interface IAuthService {
    user(id: number, email: string, password: string) : Promise<StatusData> | never;
    coordinator(id: number, email: string, password: string) : Promise<StatusData> | never;
    login(email: string, password: string, coordinator: boolean) : Promise<Object> | never;
}

export default IAuthService;