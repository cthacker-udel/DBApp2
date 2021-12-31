import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";



@Module({

    imports: [],
    exports: [],
    controllers: [UserController],
    providers: []

}) export class UserModule{};