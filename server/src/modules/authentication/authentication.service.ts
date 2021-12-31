import { Injectable } from "@nestjs/common";
import { DataService } from "../data/data.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthenticationService {

    constructor(private readonly dataService: DataService) {}

    async passLookup(pass: string) {

        const result = this.dataService.findUserByPass(pass);
        return result !== undefined ? result : {};

    };


};