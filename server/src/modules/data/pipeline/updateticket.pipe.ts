import { validateOrReject } from 'class-validator';
import { UpdateTicketRequestEntity } from './../../../shared/entities/mongodb/private/patch/UpdateTicketRequestEntity.entity';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { UpdateTicketRequestDTO } from "src/shared/api/private/patch/UpdateTicketRequest.dto";




@Injectable()
export class UpdateTicketPipe implements PipeTransform {

    transform(value: UpdateTicketRequestEntity, metadata: ArgumentMetadata) {

        const convertedClass = plainToClass(UpdateTicketRequestDTO, value);
        try{
            validateOrReject(convertedClass);
            return plainToClass(UpdateTicketRequestEntity, convertedClass);
        } catch (error) {
            throw new BadRequestException("Invalid Update Ticket Request -- failed at pipe");
        }

    }

}