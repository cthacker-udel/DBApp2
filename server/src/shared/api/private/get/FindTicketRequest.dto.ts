import { IsAlpha, IsAlphanumeric, IsDate, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class FindTicketRequestDTO {

    @IsNumber()
    ticketNum: number;

    @IsString()
    @IsAlpha()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    date: string;

};