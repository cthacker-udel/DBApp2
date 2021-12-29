import { BadRequestException, Injectable } from "@nestjs/common";
import { AddTicketRequestDTO } from "src/shared/api/private/post/AddTicketRequest.dto";
import { FindTicketRequestEntity } from "src/shared/entities/mongodb/private/get/FindTicketRequest.entity";
import { AddTicketRequestEntity } from "src/shared/entities/mongodb/private/post/AddTicketRequestEntity.entity";
import { EntityTarget, getConnection, getMongoManager } from "typeorm";

@Injectable()
export class DataService {

    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo)}

    async addTicket(addTicket: AddTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<AddTicketRequestEntity>(AddTicketRequestEntity);
        try{
            mongoRepo.insert(addTicket);
        } catch (err) {
            throw new BadRequestException('Invalid Create Ticket Request');
        }
    };

    async findTicket(findTicket: FindTicketRequestEntity) {
        const mongoRepo = this.getMongoRepo<FindTicketRequestEntity>(FindTicketRequestEntity);
        try{
            mongoRepo.find(findTicket);
        } catch (err) {
            throw new BadRequestException('Invalid search for ticket');
        }
    }

};