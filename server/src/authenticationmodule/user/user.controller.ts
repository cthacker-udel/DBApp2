import { Controller, Get, Param } from "@nestjs/common";


@Controller('authuser')
export class AuthUserController {


    @Get(':id')
    async returnHello(@Param('id') id: string): Promise<string> {
        return "hello!";
    }

};
