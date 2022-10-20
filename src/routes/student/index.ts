import Router from "..";
import IStudentController from "../../controller/student/interface";


export default class StudentRouter extends Router {
    constructor(controller: IStudentController) {
        super(controller, "Student");
    }
}