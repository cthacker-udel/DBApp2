import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsNotEmpty, IsAlphanumeric, IsAscii, MinLength, MaxLength } from 'class-validator';

@Entity()
export class UserEntity {
    
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ default: "Default Username", type: "string"})
    username: string;

    @Column({ default: "Password", type: "string"})
    password: string;

};
