import { VarArgsDtoPipe } from './dbuser/custompipes/varargs.dto.pipe';
import { VarArgsDto } from './dbuser/dto/varargs.dto';
import { DBUserEntity } from './dbuser/entities/dbuser.entity';
import { UserDTOToUserEntityPipe } from './dbuser/custompipes/userdto.to.userentity.pipe';
import { Controller, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, Query, HttpStatus, Body, Post, Inject, CACHE_MANAGER, UseGuards, SetMetadata } from "@nestjs/common";
import { Cache } from 'cache-manager';
import { ExampleGuard } from './dbuser/guards/dbtest.exampleguard.guard';
import { Roles } from './dbuser/roles/roles.decorator';



@Controller('db')
export class DBTestController {

    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {};

    /*

    Primitive type testing

    */

    @Get('pipeint/:int')
    async testIntegerPipe(@Param('int', ParseIntPipe) int: number) {
        // const result = await this.cacheManager.get('value');
        // if (result !== null) {
        //     console.log('cached value = ', result);
        // }
        // await this.cacheManager.set('value', int, { ttl: 0});
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

    @Get('varargs/user/:username')
    async testVarArgsDto(@Param(new VarArgsDtoPipe()) params: VarArgsDto): Promise<{ result: string}> {
        return { result: "success"};
    };

    @Get('/arraypipeseparator1')
    async testArrayPipeSeparator(@Query('array', new ParseArrayPipe({ items: String, separator: 'helloworld' })) array: string[]) {
        return { value : array };
    }

    /*

    Object testing

    */

    @Post('toentity')
    async testConvertUserDTOToUserEntity(@Body(new UserDTOToUserEntityPipe()) user: DBUserEntity) {
        return user;
    }

    /*

    Guard testing

    */

    @Get('addadminmetadata')
    @Roles('admin')
    async setAdminMetadata(){
        return { value: 'Setted admin metadata'}
    };

    @Get('testguard')
    @UseGuards(ExampleGuard)
    async testGuards(){
        return { value: 'Logging in'};
    }




};
