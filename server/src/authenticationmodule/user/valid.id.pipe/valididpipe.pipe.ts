import { AuthUserService } from './../user.service';
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";



@Injectable()
export class ValidIdPipe implements PipeTransform {

    constructor (private readonly userService: AuthUserService){}

    transform(value: string, metadata: ArgumentMetadata) {

        this.userService.getUserById(value);

    }

}