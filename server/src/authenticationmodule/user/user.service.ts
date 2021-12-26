import { Injectable } from "@nestjs/common";
import { getMongoManager } from "typeorm";
import { AuthUserEntity } from "./entities/AuthUser.entity";


@Injectable()
export class AuthUserService {

    async getUserById(id: string): Promise<AuthUserEntity | undefined> {
        const mongoManager = getMongoManager("mongo");
        const result = await mongoManager.findOne(AuthUserEntity, {
            username: id
        });
        return result;
    }

}