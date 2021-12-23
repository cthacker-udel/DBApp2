import { Column, Entity, ObjectIdColumn } from "typeorm";



@Entity()
export class DBUserEntity {

    constructor(newUser: string, newPass: string) {
        this.username = newUser;
        this.password = newPass;
    };

    @ObjectIdColumn()
    id: string

    @Column({ default: "defaultuser"})
    username: string

    @Column({ default: "password"})
    password: string

};
