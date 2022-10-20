import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import User from '../../model/user';
import IAuthRepository from '../../repositories/auth/interface';
import IAuthService from './interface';
import Jwt from 'jsonwebtoken';
import StatusData from '../../types/statusData';

export default class AuthService implements IAuthService {
    private repo : IAuthRepository;
    constructor(repository: IAuthRepository) {
      this.repo = repository;
    }
  login = async(email: string, password: string, coordinator: boolean): Promise<StatusData> =>{
    const user = await this.repo.login(email, password, coordinator);
    const token = process.env.TOKEN_SECRET;
    if(!token)
      throw "no token secret"
    if(user) {
      return {
        status: 200,
        data: Jwt.sign(user, token)
      }
    }
    return {
      status: 403,
      data: {
        error: "unauthorized"
      }
    };
  }
    user = async (id: number, email: string, password: string): Promise<StatusData> => {
      if(await this.repo.user(id, email, password)){
        
      }
      return {
        status: 403,
        data: {
          error: "unauthorized"
        }
      };
    }
    coordinator = async (id: number, email: string, password: string): Promise<StatusData> => {
      if(await this.repo.coordinator(id, email, password)){
        
      }
      return {
        status: 403,
        data: {
          error: "unauthorized"
        }
      };
    }
  }