import { UpdateTicketPipe } from './pipeline/updateticket.pipe';
import { DeleteTicketRequestEntity } from './../../shared/entities/mongodb/private/delete/DeleteTicketRequest.entity';
import { DeleteTicketPipe } from './pipeline/deleteticket.pipe';
import { DataService } from './data.service';
import { FindTicketPipe } from './pipeline/findticket.pipe';
import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from "@nestjs/common";
import { FindTicketRequestEntity } from 'src/shared/entities/mongodb/private/get/FindTicketRequest.entity';
import { AddTicketRequestEntity } from 'src/shared/entities/mongodb/private/post/AddTicketRequestEntity.entity';
import { UpdateTicketRequestEntity } from 'src/shared/entities/mongodb/private/patch/UpdateTicketRequestEntity.entity';
import { TicketEntity } from 'src/shared/entities/mongodb/public/TicketEntity.entity';



@Controller('/api')
export class DataController {

    constructor(private readonly dataService: DataService){}

    @Get('/public/number_of_tickets/total')
    async getNumberOfTickets() {
        console.log('running');
        return this.dataService.countTickets();
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

    /*

    PRIVATE ENDPOINTS

    */

    // will use guards, but for now
    @UsePipes(FindTicketPipe)
    @Post('/private/ticket/find_ticket')
    async findTicket(@Body() body: TicketEntity) {
        await this.dataService.findTicket(body);
    };

    @UsePipes(DeleteTicketPipe)
    @Delete('/private/ticket/delete_ticket')
    async deleteTicket(@Body() body: TicketEntity) {
        await this.dataService.deleteTicket(body);
    };

    @UsePipes(AddTicketRequestEntity)
    @Post('/private/ticket/add_ticket')
    async addTicket(@Body() body: TicketEntity) {
        await this.dataService.addTicket(body);
    };

    @UsePipes(UpdateTicketPipe)
    @Patch('/private/ticket/update_ticket')
    async updateTicket(@Body() body: TicketEntity) {
        await this.dataService.updateTicket(body);
    }


};