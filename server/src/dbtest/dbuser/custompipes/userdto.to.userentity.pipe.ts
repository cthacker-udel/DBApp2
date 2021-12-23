import { UserEntity } from './../../../user/entities/user.entity';
import { UserDto } from './../../../user/dto/user.dto';
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";



export class UserDTOToUserEntityPipe implements PipeTransform {

    transform(value: UserDto, metadata: ArgumentMetadata) {
       return new UserEntity(value.username, value.password);
    }

}