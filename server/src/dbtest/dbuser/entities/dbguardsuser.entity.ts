import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class DBGuardsUser {

    @ObjectIdColumn()
    id: string

    @Column()
    username: string

    @Column()
    passwword: string

    @Column({ default: ["user"]})
    roles: string[]

}