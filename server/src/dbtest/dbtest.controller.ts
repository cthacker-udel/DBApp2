import { DBUserEntity } from './dbuser/entities/dbuser.entity';
import { UserDTOToUserEntityPipe } from './dbuser/custompipes/userdto.to.userentity.pipe';
import { Controller, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, Query, HttpStatus, Body, Post } from "@nestjs/common";



@Controller('db')
export class DBTestController {

    /*

    Primitive type testing

    */

    @Get('pipeint/:int')
    async testIntegerPipe(@Param('int', ParseIntPipe) int: number) {
        return { value: int };
    };

    @Get('pipefloat/:float')
    async testFloatPipe(@Param('float', ParseFloatPipe) float: number) {
        return { value: float };
    };

    @Get('pipebool/:bool')
    async testBoolPipe(@Param('bool', ParseBoolPipe) bool: boolean) {
        return { value: bool };
    };

    @Get('pipearray/:array')
    async testArrayPipe(@Param('array', ParseArrayPipe) array: any[]) {
        return { value: array };
    };

    @Get('intquery')
    async testIntegerPipeQuery(@Query('int', ParseIntPipe) int: number) {
        return { value: int };
    };

    @Get('floatquery')
    async testFloatPipeQuery(@Query('float', new ParseFloatPipe({ errorHttpStatusCode: HttpStatus.I_AM_A_TEAPOT })) float: number) {
        return { value: float };
    };

    @Get('boolquery')
    async testBoolPipeQuery(@Query('bool', new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) bool: boolean ) {
        return { value: bool };
    };

    @Get('arrayquery')
    async testArrayPipeQuery(@Query('array', new ParseArrayPipe({ errorHttpStatusCode: HttpStatus.BAD_GATEWAY })) array: any[]) {
        return { value: array };
    };

    /*

    Object testing

    */

    @Post('toentity')
    async testConvertUserDTOToUserEntity(@Body(new UserDTOToUserEntityPipe()) user: DBUserEntity) {
        return user;
    }




};
