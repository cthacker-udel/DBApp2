import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './authservice.service';
import { LocalAuthServiceStrategy } from './passport.authservice/localstrategy.strategy';



@Controller('authservice')
export class AuthServiceController {

    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthServiceStrategy)
    @Post('login')
    async loginUser(@Request() request) {
        return this.authService.login(request.user);
    }

};