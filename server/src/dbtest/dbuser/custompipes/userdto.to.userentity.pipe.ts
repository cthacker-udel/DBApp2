import { DBUserEntity } from './../entities/dbuser.entity';
import { DBUserDto } from './../dto/dbuser.dto';

import { ArgumentMetadata, PipeTransform } from "@nestjs/common";



export class UserDTOToUserEntityPipe implements PipeTransform {

    transform(value: DBUserDto, metadata: ArgumentMetadata) {
       return new DBUserEntity(value.username, value.password);
    }

}