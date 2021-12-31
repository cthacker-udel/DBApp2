import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, Injectable, PipeTransform, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { FindUserRequestDTO } from 'src/shared/api/private/get/FindUserRequest.dto';
import { validateOrReject } from 'class-validator';



@Injectable()
export class UserGetPipe implements PipeTransform {

    transform(value: Request, metadata: ArgumentMetadata) {

        const convertedDto = plainToClass(FindUserRequestDTO, value.body);
        try {
            validateOrReject(convertedDto);
            return convertedDto;
        } catch (error) {
            throw new UnauthorizedException('Unauthorized access of find user request');
        }

    };

}