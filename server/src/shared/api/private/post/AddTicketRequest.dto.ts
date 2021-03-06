import { IsAlpha, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";



export class AddTicketRequestDTO {

    @IsNumber()
    @Min(1)
    ticketNum: number;

    @IsString()
    @IsAlpha()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsAlpha()
    @IsNotEmpty()
    date: string;


};