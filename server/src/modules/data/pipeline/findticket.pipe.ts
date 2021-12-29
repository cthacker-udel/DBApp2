import { ArgumentMetadata, ExecutionContext, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FindTicketPipe implements PipeTransform{

    async transform(value: FindTicket, metadata: ArgumentMetadata) {

        

    };

};
