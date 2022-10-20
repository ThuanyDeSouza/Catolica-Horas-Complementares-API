import {Request, Response, NextFunction} from 'express'


interface IAuthController {
    user(req: Request, res: Response, next: NextFunction) : Promise<any>;
    coordinator(req: Request, res: Response, next: NextFunction) : Promise<any>;
}

export default IAuthController