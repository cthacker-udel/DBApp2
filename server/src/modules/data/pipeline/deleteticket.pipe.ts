import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { DeleteTicketRequestDTO } from './../../../shared/api/private/delete/DeleteTicketRequest.dto';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { DeleteTicketRequestEntity } from 'src/shared/entities/mongodb/private/delete/DeleteTicketRequest.entity';



@Injectable()
export class DeleteTicketPipe implements PipeTransform {

    transform(value: DeleteTicketRequestDTO, metadata: ArgumentMetadata) {

        try {
            validateOrReject(value);
            return plainToClass(DeleteTicketRequestEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid Delete Ticket Request Sent -- failed at pipe");
        }

    }


}