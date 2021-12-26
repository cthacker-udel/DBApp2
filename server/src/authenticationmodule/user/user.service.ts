import { plainToClass } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { getMongoManager } from "typeorm";
import { AuthUserDto } from "./dto/AuthUser.dto";
import { AuthUserEntity } from "./entities/AuthUser.entity";


@Injectable()
export class AuthUserService {

    async getUserById(id: string): Promise<AuthUserEntity> {
        console.log("calling service with : ", id);
        const mongoManager = getMongoManager("mongo");
        console.log("before calling mongo service");
        const result = await mongoManager.findOne(AuthUserEntity, {
            username: id.trim()
        });
        console.log("before returning result");
        return result;
    };

    async insertUser(user: AuthUserDto) {
        const mongoManager = getMongoManager("mongo");
        await mongoManager.save(plainToClass(AuthUserEntity, user));
    };

};