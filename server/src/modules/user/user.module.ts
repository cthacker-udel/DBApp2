import { DataModule } from './../data/data.module';
import { Module } from "@nestjs/common";
import { AuthenticationModule } from "../authentication/authentication.module";
import { UserController } from "./user.controller";
import { DataService } from '../data/data.service';
import { ValidateUserPipe } from './pipeline/validation/validateuser.pipe';



@Module({

    imports: [AuthenticationModule, DataModule],
    exports: [],
    controllers: [UserController],
    providers: [ValidateUserPipe]

}) export class UserModule{};