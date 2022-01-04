import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { DataService } from "src/modules/data/data.service";
import { AddUserDTO } from "src/shared/api/private/post/AddUser.dto";




@Injectable()
export class ValidateUserPipe {

    constructor(private readonly dataService: DataService){}

    async validateUser(request: Request): Promise<boolean> {

        const convertedDto: AddUserDTO = plainToClass(AddUserDTO, request.body);

        try {
            validateOrReject(convertedDto);
        } catch (error) {
            return false;
        }

        const result = await this.dataService.findUserByUsername(convertedDto.username);
        if (result) {
            if (convertedDto.role === 'admin') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    };

};