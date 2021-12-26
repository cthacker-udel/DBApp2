import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { AuthUserDto } from "./dto/AuthUser.dto";
import { AuthUserEntity } from "./entities/AuthUser.entity";
import { AuthUserService } from "./user.service";
import { ValidPostPipe } from "./valid.id.pipe/valid.post.pipe";
import { ValidIdPipe } from "./valid.id.pipe/valididpipe.pipe";


@Controller('authuser')
export class AuthUserController {

    constructor (private readonly userService: AuthUserService){}

    @Get(':id')
    async returnUser(@Param('id', ValidIdPipe) id: AuthUserEntity): Promise<AuthUserEntity> {
        return id;
    };

    @Post('add')
    async addUser(@Body(ValidPostPipe) person: AuthUserDto) {
        return this.userService.insertUser(person);
    };

};
