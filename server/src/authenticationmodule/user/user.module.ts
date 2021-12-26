import { AuthUserController } from './user.controller';
import { Module } from "@nestjs/common";
import { AuthUserService } from "./user.service";


@Module({

    imports: [],
    exports: [],
    providers: [AuthUserService],
    controllers: [AuthUserController]

}) export class UserModule{};