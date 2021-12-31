import { Module } from "@nestjs/common";
import { AuthenticationModule } from "../authentication/authentication.module";
import { UserModule } from "../user/user.module";
import { DataController } from "./data.controller";
import { DataService } from "./data.service";



@Module({

    imports: [],
    exports: [DataService],
    controllers: [],
    providers: [DataService]

}) export class DataModule{};