import { validateOrReject } from 'class-validator';
import { UpdateTicketRequestEntity } from './../../../shared/entities/mongodb/private/patch/UpdateTicketRequestEntity.entity';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { UpdateTicketRequestDTO } from "src/shared/api/private/patch/UpdateTicketRequest.dto";

@Injectable()
export class UpdateTicketPipe implements PipeTransform {

    transform(value: UpdateTicketRequestDTO, metadata: ArgumentMetadata) {
        try{
            validateOrReject(value);
            return plainToClass(UpdateTicketRequestEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid Update Ticket Request -- failed at pipe");
        }

    }

}