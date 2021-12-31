import { Column, Entity } from "typeorm";
import { IsString, IsNotEmpty, IsAlphanumeric, IsAscii, MinLength, MaxLength } from 'class-validator';

@Entity()
export class UserEntity {

    @IsString()
    @IsAlphanumeric()
    @IsNotEmpty()
    @IsAscii()
    @MinLength(1)
    @MaxLength(20)
    username: string;

    @IsString()
    @IsAscii()
    @IsAlphanumeric()
    @MinLength(1)
    @MaxLength(20)
    password: string;

};