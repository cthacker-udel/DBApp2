import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";



@Controller('user')
export class UserController {

    @Get('/exampleintpipe/:int')
    async exampleIntegerPipe(@Param('int', ParseIntPipe) int: number) {
        return { value: int };
    }

    // @Get(':id')
    // async getUserByUsername(@Param('id', Parse) id: User) {

    // }

};
