import { AuthUserService } from './../user.service';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";



@Injectable()
export class ValidIdPipe implements PipeTransform {

    constructor (private readonly userService: AuthUserService){}

    async transform(value: string, metadata: ArgumentMetadata) {
        const result = this.userService.getUserById(value);
        if (await result === undefined) {
            throw new BadRequestException('User does not exist in database');
        }
        return result;
    };

};