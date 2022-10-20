import CoordinatorController from "../controller/coordinator";
import StudentController from "../controller/student";
import IStudentController from "../controller/student/interface";
import Coordinator from "../model/user/coordinator";
import Student from "../model/user/student";
import CoordinatorRepository from "../repositories/coordinator";
import StudentRepository from "../repositories/students";
import CoordinatorService from "../services/coordinator";
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
    public static Coordinator() : CoordinatorController {
        return new CoordinatorController(
            new CoordinatorService(
                new CoordinatorRepository(
                    Coordinator, new Coordinator()
                )
            )
        )
    }
}