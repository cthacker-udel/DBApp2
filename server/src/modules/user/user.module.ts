import { ValidateUserDeletePipe } from './pipeline/validation/validateuser.delete.pipe';
import { DataModule } from './../data/data.module';
import { Module } from "@nestjs/common";
import { AuthenticationModule } from "../authentication/authentication.module";
import { UserController } from "./user.controller";
import { DataService } from '../data/data.service';
import { ValidateUserPipe } from './pipeline/validation/validateuser.pipe';
import { DeleteUserGuard } from './guard/deleteuser.guard';
import { UserDeletePipe } from './pipeline/transform/user.delete.pipe';



@Module({

    imports: [AuthenticationModule, DataModule],
    exports: [],
    controllers: [UserController],
    providers: [ValidateUserPipe, DeleteUserGuard, UserDeletePipe, ValidateUserDeletePipe]

}) export class UserModule{};