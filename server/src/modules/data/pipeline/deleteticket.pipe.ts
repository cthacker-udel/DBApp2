import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { DeleteTicketRequestDTO } from './../../../shared/api/private/delete/DeleteTicketRequest.dto';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { TicketEntity } from 'src/shared/entities/mongodb/TicketEntity.entity';



@Injectable()
export class DeleteTicketPipe implements PipeTransform {

    transform(value: DeleteTicketRequestDTO, metadata: ArgumentMetadata) {

        try {
            validateOrReject(value);
            return plainToClass(TicketEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid Delete Ticket Request Sent -- failed at pipe");
        }

    }


}