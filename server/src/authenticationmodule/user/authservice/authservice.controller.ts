import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthServiceStrategy } from './passport.authservice/localstrategy.strategy';



@Controller('authservice')
export class AuthServiceController {

    @UseGuards(LocalAuthServiceStrategy)
    @Post('login')
    async loginUser(@Request() request) {
        return request.user;
    }

};