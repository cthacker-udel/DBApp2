import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";



@Module({
    imports: [],
    exports: [],
    controllers: [],
    providers: [AuthenticationService]
}) export class AuthenticationModule {};