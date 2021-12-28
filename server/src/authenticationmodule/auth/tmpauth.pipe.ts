import { TmpAuthEntity } from './entities/tmpauthentity.entity';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { TmpAuthDto } from "./dto/tmpauth.dto";
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';



@Injectable()
export class TmpAuthPipe implements PipeTransform {

    transform(value: TmpAuthDto, metadata: ArgumentMetadata) {
        
        // turn into TmpAuthEntity
        try{
            validateOrReject(value);
            const entity: TmpAuthEntity = plainToClass(TmpAuthEntity, value);
        } catch (error) {
            throw new BadRequestException("Invalid dto sent over");
        }

    }

}