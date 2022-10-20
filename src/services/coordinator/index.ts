import Service from "..";
import ICoordinatorRepository from "../../repositories/students/interface";
import ICoordinatorService from "./interface";


export default class CoordinatorService extends Service implements ICoordinatorService {
    constructor(coordinator: ICoordinatorRepository) {
        super(coordinator);
    }
    
}