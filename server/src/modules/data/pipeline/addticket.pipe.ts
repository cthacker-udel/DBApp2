import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { AddTicketRequestDTO } from "src/shared/api/private/post/AddTicketRequest.dto";
import { TicketEntity } from 'src/shared/entities/mongodb/TicketEntity.entity';

@Injectable()
export class AddTicketPipe implements PipeTransform {

    transform(value: AddTicketRequestDTO, metadata: ArgumentMetadata) {
        try {
            validateOrReject(value);
            return plainToClass(TicketEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid Add Ticket Request sent -- failed at pipe");
        }

    }


}