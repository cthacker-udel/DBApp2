import { IsAlpha, IsAlphanumeric, IsString } from 'class-validator';

export class VarArgsDto {

    @IsString()
    @IsAlpha()
    username: string

};

