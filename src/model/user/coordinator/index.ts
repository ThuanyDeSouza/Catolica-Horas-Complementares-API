import { Column, Entity, OneToMany } from "typeorm";
import User from "..";
import Course from "../../course";

@Entity()
export default class Coordinator extends User {
    @Column()
    registration : string;

    @OneToMany(()=> Course, (course : Course) => course.coordinator)
    courses: Course[];
}