import { IsAlpha, IsArray, IsString } from "class-validator";

export class DBGuardsUserDto {

    @IsString()
    @IsAlpha()
    username: string

    @IsString()
    @IsAlpha()
    password: string

    @IsArray()
    roles: string[]

};
