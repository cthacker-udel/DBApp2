import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { UpdateTicketRequestDTO } from "src/shared/api/private/patch/UpdateTicketRequest.dto";
import { TicketEntity } from 'src/shared/entities/mongodb/TicketEntity.entity';

@Injectable()
export class UpdateTicketPipe implements PipeTransform {

    transform(value: UpdateTicketRequestDTO, metadata: ArgumentMetadata) {
        try{
            validateOrReject(value);
            return plainToClass(TicketEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid Update Ticket Request -- failed at pipe");
        }

    }

}