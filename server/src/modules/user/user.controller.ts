import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from "@nestjs/common";
import { FindUserRequestDTO } from "src/shared/api/private/get/FindUserRequest.dto";
import { UserGetGuard } from "../authentication/guards/user.get.guard";
import { DataService } from "../data/data.service";
import { UserGetPipe } from "./pipeline/transform/user.get.pipe";


@Controller('/api')
export class UserController {

    constructor (private readonly dataService: DataService){}

    /*

        PUBLIC API ENDPOINTS

    */

    @Get('/users/total/all')
    async getTotalNumberOfUsers() {
        // get total number of users in the current server
    };

    @Get('/users/total/active/today')
    async getTotalNumberOfUsersToday() {
        // get total number of users who were active today
    };

    @Get('/users/total/active/:date')
    async getTotalNumberOfUsersByDate(@Param('date') date: string) {

    };

    /*

    PRIVATE ENDPOINTS --- AUTH REQUIRED

    */

    @Post('/user')
    @UseGuards(UserGetGuard)
    @UsePipes(UserGetPipe)
    async getUserObject(@Body() request: FindUserRequestDTO) {
        return request;
    };

};