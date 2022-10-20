import Service from "..";
import IStudentRepository from "../../repositories/students/interface";
import IStudentService from "./interface";


export default class StudentService extends Service implements IStudentService {
    constructor(studentRepository: IStudentRepository) {
        super(studentRepository);
    }
    
}