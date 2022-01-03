import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/shared/entities/mongodb/User.entity";
import { DataService } from "../data/data.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthenticationService {

    constructor(private readonly dataService: DataService) {}

    async passwordLookup(pass: string): Promise<UserEntity> {
        const result = this.dataService.findUserByPass(pass);
        return result;
    };

    async usernameLookup(username: string): Promise<UserEntity> {
        const result = this.dataService.findUserByUsername(username);
        return result;
    };

};