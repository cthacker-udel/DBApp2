import { Body, Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UserGetGuard } from "../authentication/guards/user.get.guard";
import { DataService } from "../data/data.service";


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

    @Get('/user')
    @UseGuards(UserGetGuard)
    async getUserObject(@Body() request: Request) {
        
    }

};