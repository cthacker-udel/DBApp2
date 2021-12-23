import { IsInt, IsString, Max, Min } from "class-validator";

export class DBUserDto {

    @IsString()
    username: string

    @IsString()
    password: string

};
