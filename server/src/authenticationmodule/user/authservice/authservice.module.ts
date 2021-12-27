import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthUserModule } from "../user.module";
import { AuthServiceController } from "./authservice.controller";
import { AuthService } from "./authservice.service";
import { AuthServiceLocalPassportStrategy } from "./passport.authservice/auth.local.strategy";



@Module({

    imports: [AuthUserModule, PassportModule],
    exports: [AuthServiceModule],
    controllers: [AuthServiceController],
    providers: [AuthService, AuthServiceLocalPassportStrategy]

}) export class AuthServiceModule {};