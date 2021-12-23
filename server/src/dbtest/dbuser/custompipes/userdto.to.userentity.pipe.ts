import { DBUserEntity } from './../entities/dbuser.entity';
import { DBUserDto } from './../dto/dbuser.dto';

import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';



export class UserDTOToUserEntityPipe implements PipeTransform {

    async transform(value: DBUserDto, metadata: ArgumentMetadata) {
        const convertedJSONToDto = plainToClass(DBUserDto, value);
        try{
            await validateOrReject(convertedJSONToDto).catch(errors => {
                throw new BadRequestException(errors)
            });
            return plainToClass(DBUserEntity, value);
        } catch (errors) {
            throw new BadRequestException('Invalid user posted');
        }
    }

}