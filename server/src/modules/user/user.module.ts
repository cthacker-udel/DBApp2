import { DataModule } from './../data/data.module';
import { Module } from "@nestjs/common";
import { AuthenticationModule } from "../authentication/authentication.module";
import { UserController } from "./user.controller";
import { DataService } from '../data/data.service';



@Module({

    imports: [AuthenticationModule, DataModule],
    exports: [],
    controllers: [UserController],
    providers: []

}) export class UserModule{};