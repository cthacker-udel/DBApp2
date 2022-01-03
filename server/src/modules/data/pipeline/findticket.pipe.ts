import { TicketEntity } from 'src/shared/entities/mongodb/TicketEntity.entity';
import { BadRequestException } from '@nestjs/common';
import { FindTicketRequestDTO } from './../../../shared/api/private/get/FindTicketRequest.dto';
import { ArgumentMetadata, ExecutionContext, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

@Injectable()
export class FindTicketPipe implements PipeTransform{

    async transform(value: FindTicketRequestDTO, metadata: ArgumentMetadata) {
        try {
            await validateOrReject(value);
            return plainToClass(TicketEntity, value);
        } catch (errors) {
            throw new BadRequestException("Invalid DTO Object sent when looking for ticket");
        }
    };

};
