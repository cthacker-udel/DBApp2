import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { AuthUserDto } from "../dto/AuthUser.dto";
import { validateOrReject } from 'class-validator';



@Injectable()
export class ValidPostPipe implements PipeTransform {

    async transform(value: AuthUserDto, metadata: ArgumentMetadata) {
        const theClass: AuthUserDto = plainToClass(AuthUserDto, value);
        try{
            await validateOrReject(theClass);
            return theClass;
        } catch (errors) {
            throw new BadRequestException('Invalid post data sent');
        }

    };

};
