import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";



@Injectable()
export class UserGetGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try{
            checkUsername(request);
            checkPassword(request);
        } catch (error) {
            throw new UnauthorizedException('Unable to access resource, provide valid credentials');
        }
    };

}