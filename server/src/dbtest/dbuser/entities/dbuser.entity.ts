import { Column, Entity, ObjectIdColumn } from "typeorm";



@Entity()
export class DBUserEntity {

    @ObjectIdColumn()
    id: string

    @Column({ default: "defaultuser"})
    username: string

    @Column({ default: "password"})
    password: string

};
