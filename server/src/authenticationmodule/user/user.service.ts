import { plainToClass } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { getMongoManager, Repository } from "typeorm";
import { AuthUserDto } from "./dto/AuthUser.dto";
import { AuthUserEntity } from "./entities/AuthUser.entity";


@Injectable()
export class AuthUserService {

    async getUserById(id: string): Promise<AuthUserEntity[]> {
        const mongoManager = getMongoManager("mongo");
        const cursor = mongoManager.createCursor(AuthUserEntity, {
            username: id.trim()
        });
        const users: AuthUserEntity[] = [];
        await cursor.forEach((eachUser) => users.push(eachUser));
        console.log("users before return = ", users);
        return users;
    };

    async insertUser(user: AuthUserDto) {
        const mongoManager = getMongoManager("mongo");
        await mongoManager.save(plainToClass(AuthUserEntity, user));
    };

};