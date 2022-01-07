import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/shared/entities/mongodb/User.entity";
import { DataService } from "../data/data.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthenticationService {

    constructor(private readonly dataService: DataService) {}

    async passwordLookup(pass: string): Promise<UserEntity> {
        const result = await this.dataService.findUserByPass(pass);
        return result;
    };

    async usernameLookup(username: string): Promise<boolean> {
        const result = await this.dataService.verifyUserByUsername(username);
        return result.findResult;
    };

    async usernameCount(username: string): Promise<number> {
        const result = await this.dataService.findUserCountByUsername(username);
        return result;
    };

    async getUserEntity(username: string): Promise<UserEntity> {

        const result = await this.dataService.findUserByUsername(username);
        if (result)  {
            return result;
        } else {
            return null;
        }

    };

};