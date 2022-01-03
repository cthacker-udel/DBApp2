import { IsNotEmpty, IsString, MinLength } from "class-validator"



export class AddUserDTO {


    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    username: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string

};