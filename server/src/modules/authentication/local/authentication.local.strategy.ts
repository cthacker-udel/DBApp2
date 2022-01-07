import { EncryptionService } from './../encrypt/encrypt.auth.service';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { Strategy } from "passport-local";
import { UserEntity } from "src/shared/entities/mongodb/User.entity";
import { AuthenticationService } from "../authentication.service";



@Injectable()
export class BasicLocalStrategy extends PassportStrategy(Strategy) {

    constructor (private readonly authService: AuthenticationService, private readonly encryptService: EncryptionService){
        super();
    }

    async validateUser(username: string, pass: string): Promise<null | UserEntity> {

        const usernameExists = await this.authService.usernameLookup(username);
        if (usernameExists) {
            let verification = await this.encryptService.checkUsername(username);
            verification = await this.encryptService.checkPassword(pass);
            if (verification) {
                const user = await this.authService.getUserEntity(username);
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }

    }



}