import { Module } from "@nestjs/common";
import { AuthUserModule } from "../user.module";
import { AuthServiceController } from "./authservice.controller";
import { AuthService } from "./authservice.service";



@Module({

    imports: [AuthUserModule],
    exports: [AuthServiceModule],
    controllers: [AuthServiceController],
    providers: [AuthService]

}) export class AuthServiceModule {};