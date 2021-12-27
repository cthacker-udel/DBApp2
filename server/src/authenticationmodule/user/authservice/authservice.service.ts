import { AuthUserEntity } from './../entities/AuthUser.entity';
import { AuthUserService } from './../user.service';
import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {

    constructor(private readonly userService: AuthUserService){}

    async validateUser(username: string, pass: string){

        const findUser = await this.userService.getUserById(username); 
        const user: AuthUserEntity = findUser[0];
        if (user) {
            const { password , ...result } = user;
            if (username === user.username && pass === user.password) {
                return { value: "login succeeded" };
            }
        }
        return null;
        

    }

}