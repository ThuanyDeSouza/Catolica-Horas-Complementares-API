import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import User from "..";
import Course from "../../course";

@Entity()
export default class Student extends User {
    @Column()
    registration : string;

    @Column()
    period : number;

    @OneToOne(() => Course)
    @JoinColumn()
    course : Course;
}