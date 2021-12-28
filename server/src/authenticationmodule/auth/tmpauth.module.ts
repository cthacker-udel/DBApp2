import { Module } from "@nestjs/common";
import { TmpAuthController } from "./tmpauth.controller";
import { TmpAuthService } from "./tmpauth.service";



@Module({

    imports: [],
    exports: [TmpAuthService],
    controllers: [TmpAuthController],
    providers: [TmpAuthService]

}) export class TmpAuthModule {};
