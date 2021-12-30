import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { AddTicketRequestDTO } from "src/shared/api/private/post/AddTicketRequest.dto";
import { AddTicketRequestEntity } from "src/shared/entities/mongodb/private/post/AddTicketRequestEntity.entity";




@Injectable()
export class AddTicketPipe implements PipeTransform {

    transform(value: AddTicketRequestEntity, metadata: ArgumentMetadata) {

        const convertedDto: AddTicketRequestDTO = plainToClass(AddTicketRequestDTO, value);
        try {
            validateOrReject(convertedDto);
            return plainToClass(AddTicketRequestEntity, convertedDto);
        } catch (error) {
            throw new BadRequestException("Invalid Add Ticket Request sent -- failed at pipe");
        }

    }


}