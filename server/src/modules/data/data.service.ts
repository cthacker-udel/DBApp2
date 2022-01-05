import { BadRequestException, Injectable } from "@nestjs/common";
import { EntityTarget, getConnection, getMongoManager } from "typeorm";
import { TicketEntity } from 'src/shared/entities/mongodb/TicketEntity.entity';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { UserEntity } from 'src/shared/entities/mongodb/User.entity';
import { AddUserDTO } from 'src/shared/api/private/post/AddUser.dto';

@Injectable()
export class DataService {

    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo)}


    /*

    Public endpoints

    */

    async countTickets() {

        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            return { "ticketCount": await mongoRepo.count() };
        } catch (error) {
            throw new BadRequestException('No Tickets available to be counted');
        }

    }

    /*

    Ticket Requests

    */


    async addTicket(addTicket: TicketEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.insert(addTicket);
        } catch (err) {
            throw new BadRequestException('Invalid Create Ticket Request');
        }
    };

    async findTicket(findTicket: TicketEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.find(findTicket);
        } catch (err) {
            throw new BadRequestException('Invalid Find Ticket Request');
        }
    };

    async deleteTicket(deleteTicket: TicketEntity) {
        const mongoRepo = this.getMongoRepo<TicketEntity>(TicketEntity);
        try {
            mongoRepo.delete(deleteTicket);
        } catch (error) {
            throw new BadRequestException('Invalid Delete Ticket Request');
        }
    };

    async updateTicket(updateTicket: TicketEntity) {
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

   async verifyUserByUsername(username: string): Promise<{ findResult: boolean }> {

        console.log('finding user with username : ', username);
        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = await mongoRepo.count({
                username: username
            });
            return { findResult: result > 0 };
        } catch (error) {
            throw new BadRequestException('Invalid request to verify user by username');
        }

   };

   async findUserEntityByUsername(user: AddUserDTO): Promise<UserEntity> {

        const username = user.username;
        console.log('finding user with username : ', username);
        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = await mongoRepo.findOne({
                username: username
            });
            return result;
        } catch (error) {
            throw new BadRequestException('Invalid request to find user by username');
        }

   }

   async findUserCountByUsername(username: string) {
        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {

            const result = await mongoRepo.count({
                username: username
            });
            return result;

        } catch (error) {
            throw new BadRequestException('Invalid request to count # of users by username');
        }
   };

   async addUser(user: UserEntity) {

        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = await mongoRepo.save<UserEntity>(user);
        } catch (error) {
            throw new BadRequestException('Invalid request to create user');
        }

   };

   async getTotalUserCount() {
        const mongoRepo = this.getMongoRepo<UserEntity>(UserEntity);
        try {
            const result = await mongoRepo.count();
        } catch (error) {
            throw new BadRequestException('Invalid request to count users');
        }
   };




};