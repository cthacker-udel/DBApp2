import { IsString, IsAlphanumeric, IsNotEmpty, IsAscii, MinLength, MaxLength } from "class-validator"

export class FindUserRequestDTO {

    
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

}