import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, Injectable, PipeTransform, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { FindUserRequestDTO } from 'src/shared/api/private/get/FindUserRequest.dto';
import { validateOrReject } from 'class-validator';
import { AuthenticationService } from 'src/modules/authentication/authentication.service';



@Injectable()
export class UserGetPipe implements PipeTransform {

    constructor (private readonly authService: AuthenticationService) {}

    async transform(value: FindUserRequestDTO, metadata: ArgumentMetadata) {

        try {
            validateOrReject(value);
            await this.authService.usernameLookup(value.username);
            await this.authService.passwordLookup(value.password);
        } catch (error) {
            throw new UnauthorizedException('Unauthorized access of find user request');
        }

    };

}