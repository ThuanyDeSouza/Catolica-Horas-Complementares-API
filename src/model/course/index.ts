import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Coordinator from "../user/coordinator";

@Entity()
export default class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=>Coordinator, (coordinator: Coordinator) => coordinator.courses)
    coordinator: Coordinator;
}