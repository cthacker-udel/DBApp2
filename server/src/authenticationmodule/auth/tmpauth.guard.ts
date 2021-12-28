import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { Strategy } from "passport-local";
import { Observable } from "rxjs";



@Injectable()
export class TmpAuthGuards extends AuthGuard('local') {

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const req: Request = context.switchToHttp().getRequest();

    }

}