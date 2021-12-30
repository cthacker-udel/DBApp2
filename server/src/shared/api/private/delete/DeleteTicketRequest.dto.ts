import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class DeleteTicketRequestDTO {

    @IsNumber()
    ticketNum: number;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    date: string;

};