import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ValidateUserPipe } from "../pipeline/validation/validateuser.pipe";




@Injectable()
export class AddUserGuard implements CanActivate {

    constructor(private readonly validateUserPipe: ValidateUserPipe){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateUserPipe.validateUser(request);
    };

};