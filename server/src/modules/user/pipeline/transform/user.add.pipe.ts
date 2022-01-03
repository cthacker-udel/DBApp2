import { UserEntity } from 'src/shared/entities/mongodb/User.entity';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { validateOrReject } from "class-validator";
import { AuthenticationService } from "src/modules/authentication/authentication.service";
import { DataService } from "src/modules/data/data.service";
import { AddUserDTO } from "src/shared/api/private/post/AddUser.dto";



@Injectable()
export class UserAddPipe implements PipeTransform {

    constructor (private readonly authService: AuthenticationService, private readonly dataService: DataService) {}

    async transform(value: AddUserDTO, metadata: ArgumentMetadata) {

        // first check if user is logged in

        try {
            validateOrReject(value);
            const authUserResult = await this.authService.usernameCount(value.username);
            console.log('result = ', authUserResult);
            if (authUserResult === 0) {
                return plainToClass(UserEntity, value);
            } else {
                throw new BadRequestException('Invalid request to add user : User Already Exists');
            }
        } catch (error) {
            throw new BadRequestException('Invalid request to create user');
        }

    };

}