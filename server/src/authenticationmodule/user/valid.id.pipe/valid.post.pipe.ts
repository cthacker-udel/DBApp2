import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { AuthUserDto } from "../dto/AuthUser.dto";
import { validateOrReject } from 'class-validator';



@Injectable()
export class ValidPostPipe implements PipeTransform {

    async transform(value: AuthUserDto, metadata: ArgumentMetadata) {
        if (!metadata) {
            return value;
        }
        console.log("before transforming class");
        const theClass: AuthUserDto = plainToClass(AuthUserDto, value);
        try{
            await validateOrReject(theClass);
            console.log("before returning");
            return theClass;
        } catch (errors) {
            throw new BadRequestException('Invalid post data sent');
        }

    };

};
