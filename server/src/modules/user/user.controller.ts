import { UserEntity } from 'src/shared/entities/mongodb/User.entity';
import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from "@nestjs/common";
import { FindUserRequestDTO } from "src/shared/api/private/get/FindUserRequest.dto";
import { AddUserDTO } from "src/shared/api/private/post/AddUser.dto";
import { UserGetGuard } from "./guard/user.get.guard";
import { DataService } from "../data/data.service";
import { UserAddPipe } from "./pipeline/transform/user.add.pipe";
import { UserGetPipe } from "./pipeline/transform/user.get.pipe";
import { AddUserGuard } from './guard/adduser.guard';
import { DeleteUserGuard } from './guard/deleteuser.guard';
import { UserDeletePipe } from './pipeline/transform/user.delete.pipe';


@Controller('/api')
export class UserController {

    constructor (private readonly dataService: DataService){}

    /*

        PUBLIC API ENDPOINTS

    */

    @Get('/users/total/all')
    async getTotalNumberOfUsers() {
        // get total number of users in the current server
        return await this.dataService.getTotalUserCount();
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

    @Post('/user/find')
    @UseGuards(UserGetGuard)
    @UsePipes(UserGetPipe)
    async getUserObject(@Body() request: FindUserRequestDTO) {
        return request;
    };

    @Post('/user/add')
    @UseGuards(AddUserGuard)
    @UsePipes(UserAddPipe)
    async addUser(@Body() request: UserEntity) {
        await this.dataService.addUser(request);
        return { "Status": "Success" };
    };

    @Delete('/user/remove')
    @UseGuards(DeleteUserGuard)
    @UsePipes(UserDeletePipe)
    async deleteUser(@Body() request: UserEntity) {
        await this.dataService.findUserEntityByUsername(request)
        return { "Status", "Success" };
    }

    

};