import { Controller, Get } from "@nestjs/common";
import { TmpAuthService } from "./tmpauth.service";



@Controller('tmpauth')
export class TmpAuthController {

    constructor(private readonly tmpauthService: TmpAuthService){}

    @Get('example1')
    async getExample(){
        return { "hello world": "hello" };
    };


}