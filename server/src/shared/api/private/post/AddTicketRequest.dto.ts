import { IsAlpha, IsNumber, IsString, Min } from "class-validator";



export class AddTicketRequestDTO {

    @IsNumber()
    @Min(1)
    ticketNum: number

    @IsString()
    @IsAlpha()
    subject: string

    @IsString()
    @IsAlpha()
    date: string

};