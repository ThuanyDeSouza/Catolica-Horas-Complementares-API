import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import User from '../../model/user';
import IAuthController from './interface';

export default class Auth implements IAuthController {
  
    constructor() {
  
    }
    user(req: Request, res: Response,next: NextFunction): Promise<Object> {
        throw new Error('Method not implemented.');
    }
    coordinator(req: Request, res: Response, next: NextFunction): Promise<Object> {
        throw new Error('Method not implemented.');
    }
    
    
    private static auth = async  (req: Request, res: Response) => {
        const auth = req.headers["authorization"];
        if(!auth) 
            return res.status(403).json({
                'error': 'unauthorized'
            });
        const token = auth.split(' ')[1];
      if (!token) 
        return res.status(403).json({
            'error': 'unauthorized'
        });
      
      try {
        const tokenSecret = String(process.env.TOKEN_SECRET);
        const tokenValue = jwt.verify(token, tokenSecret);
        
        const user = await AppDataSource.getRepository(User).findOneBy({
          id: (<any>tokenValue).id,
          name: (<any>tokenValue).name,
          email: (<any>tokenValue).email
        });
        
        if(!user) 
        throw "!user"
        
        return {status: 200, value: tokenValue}
        
      } catch(error) {
        return {status: 400, value:{message: "Unauthorized"}};
      }
    }
  }