import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ValidateUserDeletePipe } from "../pipeline/validation/validateuser.delete.pipe";



@Injectable()
export class DeleteUserGuard implements CanActivate {

    constructor (private readonly validateUserDeletePipe: ValidateUserDeletePipe){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();
        return this.validateUserDeletePipe.ValidateUserDeleteRequest(request);

    };


}