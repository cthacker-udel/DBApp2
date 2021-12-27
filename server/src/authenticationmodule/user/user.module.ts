import { AuthUserController } from './user.controller';
import { Module } from "@nestjs/common";
import { AuthUserService } from "./user.service";
import { AuthServiceModule } from './authservice/authservice.module';
import { PassportModule } from '@nestjs/passport';
import { AuthServiceLocalPassportStrategy } from './authservice/passport.authservice/auth.local.strategy';


@Module({

    imports: [],
    exports: [AuthUserService],
    providers: [AuthUserService],
    controllers: [AuthUserController]

}) export class AuthUserModule{};