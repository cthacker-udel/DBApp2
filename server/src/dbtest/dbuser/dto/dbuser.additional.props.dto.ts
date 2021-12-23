import { IsNumber, IsNumberString, IsString } from "class-validator";

export class DBUserAdditionalPropsDto {

    @IsString()
    @IsNumberString()
    clearance: string

};