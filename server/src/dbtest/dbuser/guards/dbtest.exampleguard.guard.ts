import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';


@Injectable()
export class ExampleGuard implements CanActivate{

    constructor(private reflector: Reflector){};

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (roles) {

            console.log('roles = ', roles);

            const overriddenRoles = this.reflector.getAllAndOverride<string[]>('roles', [ context.getHandler(), context.getClass() ]);

            const mergedRoles = this.reflector.getAllAndMerge<string[]>('roles', [ context.getHandler(), context.getClass() ]);

            if (!roles.includes('admin')) {
                return false;
            }
            return true;

        } else {
            return false;
        }
    };

};
