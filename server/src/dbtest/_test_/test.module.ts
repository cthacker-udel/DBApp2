import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';



@Module({

    imports: [ConfigModule],
    exports: [],
    controllers: [TestController],
    providers: [TestService]

}) export class TestModule {};