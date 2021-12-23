import { IsInt, IsString, Max, Min } from "class-validator";

export class DBUserDto {

    constructor(user: string, pass: string) {
        this.username = user;
        this.password = pass;
    }

    @IsString()
    username: string

    @IsString()
    password: string

};
