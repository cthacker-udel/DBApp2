import { Controller, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseFloatPipe, ParseIntPipe } from "@nestjs/common";



@Controller('db')
export class DBTestController {

    @Get('/pipeint/:int')
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

}