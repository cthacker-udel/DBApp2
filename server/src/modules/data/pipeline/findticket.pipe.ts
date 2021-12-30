import { BadRequestException } from '@nestjs/common';
import { FindTicketRequestDTO } from './../../../shared/api/private/get/FindTicketRequest.dto';
import { ArgumentMetadata, ExecutionContext, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FindTicketRequestEntity } from 'src/shared/entities/mongodb/private/get/FindTicketRequest.entity';
import { validateOrReject } from 'class-validator';

@Injectable()
export class FindTicketPipe implements PipeTransform{

    async transform(value: FindTicketRequestEntity, metadata: ArgumentMetadata) {
        const ConvertedToDTO = plainToClass(FindTicketRequestDTO, value);
        try {
            await validateOrReject(ConvertedToDTO);
            return plainToClass(FindTicketRequestEntity, ConvertedToDTO);
        } catch (errors) {
            throw new BadRequestException("Invalid DTO Object sent when looking for ticket");
        }
    };

};
