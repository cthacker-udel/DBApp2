import { Controller, Get, Param, UsePipes } from "@nestjs/common";
import { AuthUserEntity } from "./entities/AuthUser.entity";
import { AuthUserService } from "./user.service";
import { ValidIdPipe } from "./valid.id.pipe/valididpipe.pipe";


@Controller('authuser')
export class AuthUserController {

    constructor (private readonly userService: AuthUserService){}

    @Get(':id')
    @UsePipes(ValidIdPipe)
    async returnUser(@Param('id') id: AuthUserEntity): Promise<AuthUserEntity> {
        return id;
    }

};
