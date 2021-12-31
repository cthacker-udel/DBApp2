import { DeleteTicketRequestEntity } from './../../shared/entities/mongodb/private/delete/DeleteTicketRequest.entity';
import { BadRequestException, Injectable } from "@nestjs/common";
import { FindTicketRequestEntity } from "src/shared/entities/mongodb/private/get/FindTicketRequest.entity";
import { AddTicketRequestEntity } from "src/shared/entities/mongodb/private/post/AddTicketRequestEntity.entity";
import { EntityTarget, getConnection, getMongoManager } from "typeorm";
import { UpdateTicketRequestEntity } from 'src/shared/entities/mongodb/private/patch/UpdateTicketRequestEntity.entity';
import { TicketEntity } from 'src/shared/entities/mongodb/public/TicketEntity.entity';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { UserEntity } from 'src/shared/entities/mongodb/public/User.entity';

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

    async countPriorityTickets(priority: number) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.findAndCount(
                {
                    ticketNum: priority // temporary, should be `priority: priority` , and it is not because the priority part of the ticket has not yet been implemented
                }
            );
        } catch(error) {
            throw new BadRequestException(`Invalid Request to count tickets by priority ${priority}`);
        }
    };

    /*

        USER REQUESTS

    */

   async findUserByPass(pass: string) {
        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = mongoRepo.findOne({
                password: pass
            });
            return result;
        } catch (error) {
            throw new BadRequestException('Invalid request to find user via password lookup');
        }
   };

   async findUserByUsername(username: string) {

        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = mongoRepo.findOne({
                username: username
            });
            return result;
        } catch (error) {
            throw new BadRequestException('Invalid request to find user by username');
        }

   };




};