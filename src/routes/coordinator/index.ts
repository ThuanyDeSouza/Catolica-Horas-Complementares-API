import Router from "..";
import ICoordinatorController from "../../controller/student/interface";


export default class CoordinatorRouter extends Router {
    constructor(controller: ICoordinatorController) {
        super(controller, "Coordinator");
    }
}