import Controller from "..";
import ICoordinatorService from "../../services/student/interface";
import ICoordinatorController from "./interface";


export default class CoordinatorController extends Controller implements ICoordinatorController {
    constructor(service: ICoordinatorService) {
        super(service)
    }
}