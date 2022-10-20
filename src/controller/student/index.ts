import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "..";
import IStudentService from "../../services/student/interface";
import IController from "../interface";
import IStudentController from "./interface";


export default class StudentController extends Controller implements IStudentController {
    constructor(service: IStudentService) {
        super(service)
    }
}