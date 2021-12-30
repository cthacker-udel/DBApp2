import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class UpdateTicketRequestDTO {

    @IsNumber()
    ticketNum: number;

    @IsString()
    @IsNotEmpty()
    subject: string;


    @IsString()
    @IsNotEmpty()
    date: string;

};