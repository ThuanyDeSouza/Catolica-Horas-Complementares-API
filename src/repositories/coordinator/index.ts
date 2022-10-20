import { EntityTarget } from "typeorm";
import Repository from "..";
import { AppDataSource } from "../../data-source";
import Coordinator from "../../model/user/coordinator";
import ICoordinatorRepository from "./interface";

export default class CoordinatorRepository extends Repository implements ICoordinatorRepository {
    private coordinator: Coordinator;
    private coordinatorModel: EntityTarget<Coordinator>;
    constructor(model: EntityTarget<Coordinator>, instance: Coordinator) {
        super(model);
        this.coordinator = instance;
        this.coordinatorModel = model;
    }

    create = async (data: any): Promise<Object> => {
        const coordinator = await new Coordinator();
        coordinator.name = data.name;
        coordinator.email = data.email;
        coordinator.password = data.password;
        coordinator.registration = data.registration;
        this.coordinator = coordinator;
        await AppDataSource.getRepository(this.coordinatorModel).save(coordinator);
        return coordinator;

    }
    update = async (id: number, data: any): Promise<Object> =>{
        const coordinator = await AppDataSource.getRepository(this.coordinatorModel).findOneByOrFail({id: id});
        coordinator.name = data.name;
        coordinator.email = data.email;
        coordinator.password = data.password;
        coordinator.registration = data.registration;
        this.coordinator = coordinator;
        await AppDataSource.getRepository(this.coordinatorModel).save(coordinator);
        return coordinator;
    }
}

