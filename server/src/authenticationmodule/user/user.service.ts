import { plainToClass } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { getMongoManager } from "typeorm";
import { AuthUserDto } from "./dto/AuthUser.dto";
import { AuthUserEntity } from "./entities/AuthUser.entity";


@Injectable()
export class AuthUserService {

    async getUserById(id: string): Promise<AuthUserEntity | undefined> {
        const mongoManager = getMongoManager("mongo");
        const result = await mongoManager.findOne<AuthUserEntity>(AuthUserEntity, {
            username: id
        });
        return result;
    };

    async insertUser(user: AuthUserDto) {
        const mongoManager = getMongoManager("mongo");
        await mongoManager.save(plainToClass(AuthUserEntity, user));
    };

}