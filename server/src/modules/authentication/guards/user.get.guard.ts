import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { EncryptionService } from "../encrypt/encrypt.auth.service";



@Injectable()
export class UserGetGuard implements CanActivate {

    constructor(private readonly encryptService: EncryptionService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try{
            this.encryptService.checkUsername(request);
            checkPassword(request);
        } catch (error) {
            throw new UnauthorizedException('Unable to access resource, provide valid credentials');
        }
    };

}