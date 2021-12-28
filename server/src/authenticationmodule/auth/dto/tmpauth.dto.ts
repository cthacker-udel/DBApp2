import { IsAlpha, IsString } from "class-validator";


export class TmpAuthDto {

    @IsString()
    @IsAlpha()
    name: string

    @IsString()
    last: string

};