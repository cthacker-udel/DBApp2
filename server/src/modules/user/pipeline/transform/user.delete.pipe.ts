import { AddUserDTO } from 'src/shared/api/private/post/AddUser.dto';
import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { DataService } from 'src/modules/data/data.service';
import { validateOrReject } from 'class-validator';



@Injectable()
export class UserDeletePipe implements PipeTransform {

    constructor (private readonly dataService: DataService){}

    async transform(value: AddUserDTO, metadata: ArgumentMetadata) {
        
        const result = await this.dataService.verifyUserByUsername(value.username);
        if (result) {
            // user exists
            try {
                validateOrReject(value);
                return result;
            } catch (error) {
                throw new BadRequestException('Invalid request to delete user');
            }
        } else {
            throw new BadRequestException('Invalid request to delete user');
        }

    }

};