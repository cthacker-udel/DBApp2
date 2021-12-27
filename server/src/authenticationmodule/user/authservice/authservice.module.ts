import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthUserModule } from "../user.module";
import { AuthServiceController } from "./authservice.controller";
import { AuthService } from "./authservice.service";
import { AuthServiceLocalPassportStrategy } from "./passport.authservice/auth.local.strategy";
import { jwtConstants } from "./secrets/constants";


@Module({

    imports: [AuthUserModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s'}
    })],
    exports: [AuthServiceModule],
    controllers: [AuthServiceController],
    providers: [AuthService, AuthServiceLocalPassportStrategy]

}) export class AuthServiceModule {};