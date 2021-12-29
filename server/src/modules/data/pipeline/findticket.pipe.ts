import { BadRequestException } from '@nestjs/common';
import { FindTicketRequestDTO } from './../../../shared/api/private/get/FindTicketRequest.dto';
import { ArgumentMetadata, ExecutionContext, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FindTicketRequestEntity } from 'src/shared/entities/mongodb/private/get/FindTicketRequest.entity';
import { validateOrReject } from 'class-validator';

@Injectable()
export class FindTicketPipe implements PipeTransform{

    async transform(value: FindTicketRequestDTO, metadata: ArgumentMetadata) {
        const ConvertedToEntity = plainToClass(FindTicketRequestEntity, value);
        try {
            await validateOrReject(ConvertedToEntity);
            return ConvertedToEntity;
        } catch (errors) {
            throw new BadRequestException("Invalid DTO Object sent when looking for ticket");
        }
    };

};
