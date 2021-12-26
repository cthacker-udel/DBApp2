import { Injectable } from "@nestjs/common";
import { getMongoManager } from "typeorm";


@Injectable()
export class AuthUserService {

    async getUserById(id: string){

        const mongoManager = getMongoManager("mongo");

    }

}