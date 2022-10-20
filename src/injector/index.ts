import StudentController from "../controller/student";
import IStudentController from "../controller/student/interface";
import Student from "../model/user/student";
import StudentRepository from "../repositories/students";
import StudentService from "../services/student";

export default class Injector {
    public static Student() : StudentController {
        return new StudentController(
            new StudentService(
                new StudentRepository(
                    Student, new Student()
                )
            )
        )
    }
}