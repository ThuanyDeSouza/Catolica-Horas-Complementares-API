import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model from "../interface";


@Entity()
export default abstract class User extends Model {
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;
}