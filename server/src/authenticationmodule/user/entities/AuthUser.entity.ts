import { IsAlpha, IsString } from "class-validator";
import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class AuthUserEntity {

    @ObjectIdColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string

};