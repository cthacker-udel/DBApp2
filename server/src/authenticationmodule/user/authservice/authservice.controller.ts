import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';



@Controller('authservice')
export class AuthServiceController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async loginUser(@Request() request) {
        return request.user;
    }

};