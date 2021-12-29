import { DataService } from './data.service';
import { FindTicketPipe } from './pipeline/findticket.pipe';
import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { FindTicketRequestEntity } from 'src/shared/entities/mongodb/private/get/FindTicketRequest.entity';



@Controller('/api')
export class DataController {

    constructor(private readonly dataService: DataService){}

    @Get('/public/number_of_tickets/total')
    async getNumberOfTickets() {
        // finds number of tickets, can be public endpoint
    };

    @Get('/public/number_of_tickets/date/:date')
    async getNumberOfTicketsDate(@Param('date') date: string) {
        // finds number of tickets during specified date, can be public
    };

    @Get('/public/number_of_tickets/status/:status')
    async getNumberOfTicketsStatus(@Param('status') status: string) {
        // finds number of tickets with specified status
    };

    @Get('/public/number_of_tickets/priority/:number')
    async getNumberOfTicketsPriority(@Param('number') number: string) {
        // passes number as string, gather number of tickets with set priority
    };

    // will use guards, but for now
    @UsePipes(FindTicketPipe)
    @Post('/private/ticket/find_ticket')
    async findTicket(@Body() body: FindTicketRequestEntity) {
        await this.dataService.findTicket(body);
    };

};