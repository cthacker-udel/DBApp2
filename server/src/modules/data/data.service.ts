import { DeleteTicketRequestEntity } from './../../shared/entities/mongodb/private/delete/DeleteTicketRequest.entity';
import { BadRequestException, Injectable } from "@nestjs/common";
import { FindTicketRequestEntity } from "src/shared/entities/mongodb/private/get/FindTicketRequest.entity";
import { AddTicketRequestEntity } from "src/shared/entities/mongodb/private/post/AddTicketRequestEntity.entity";
import { EntityTarget, getConnection, getMongoManager } from "typeorm";
import { UpdateTicketRequestEntity } from 'src/shared/entities/mongodb/private/patch/UpdateTicketRequestEntity.entity';
import { TicketEntity } from 'src/shared/entities/mongodb/public/TicketEntity.entity';

@Injectable()
export class DataService {

    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo)}

    async addTicket(addTicket: AddTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.insert(addTicket);
        } catch (err) {
            throw new BadRequestException('Invalid Create Ticket Request');
        }
    };

    async findTicket(findTicket: FindTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.find(findTicket);
        } catch (err) {
            throw new BadRequestException('Invalid Find Ticket Request');
        }
    };

    async deleteTicket(deleteTicket: DeleteTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.delete(deleteTicket);
        } catch (error) {
            throw new BadRequestException('Invalid Delete Ticket Request');
        }
    };

    async updateTicket(updateTicket: UpdateTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.update(updateTicket, updateTicket);
        } catch (error) {
            throw new BadRequestException('Invalid update ticket request');
        }
    };

};