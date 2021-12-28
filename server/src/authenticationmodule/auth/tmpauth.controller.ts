import { Controller, Get, UseGuards, UsePipes } from "@nestjs/common";
import { TmpAuthGuards } from "./tmpauth.guard";
import { TmpAuthPipe } from "./tmpauth.pipe";
import { TmpAuthService } from "./tmpauth.service";



@Controller('tmpauth')
export class TmpAuthController {

    constructor(private readonly tmpauthService: TmpAuthService){}

    @Get('example1')
    @UsePipes(TmpAuthPipe)
    @UseGuards(TmpAuthGuards)
    async getExample(){
        return { "hello world": "hello" };
    };


}