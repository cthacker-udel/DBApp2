import { Module } from "@nestjs/common";
import { DataModule } from "../data/data.module";
import { AuthenticationService } from "./authentication.service";
import { DecryptionService } from "./decrypt/decrypt.auth.service";
import { EncryptionService } from "./encrypt/encrypt.auth.service";



@Module({
    imports: [DataModule],
    exports: [EncryptionService, DecryptionService, AuthenticationService],
    controllers: [],
    providers: [EncryptionService, DecryptionService, AuthenticationService]
}) export class AuthenticationModule {};