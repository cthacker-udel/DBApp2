import { IsAlpha, IsString } from "class-validator";

export class AuthUserDto {

    @IsString()
    @IsAlpha()
    username: string

    @IsString()
    @IsAlpha()
    password: string


};