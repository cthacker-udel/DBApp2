import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Request } from "express";
import { DataService } from "src/modules/data/data.service";
import { AddUserDTO } from "src/shared/api/private/post/AddUser.dto";



@Injectable()
export class ValidateUserDeletePipe {

    constructor (private readonly dataService: DataService) {}

    async ValidateUserDeleteRequest(request: Request) {

        const convertedDto = plainToClass(AddUserDTO, request.body);
        // convert body to dto
        const userCount = await this.dataService.findUserCountByUsername(convertedDto.username);
        if (userCount > 1) {
            return true;
        } else {
            return false;
        }

    };

}