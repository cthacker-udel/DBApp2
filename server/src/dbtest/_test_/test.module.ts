import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Module } from "@nestjs/common";



@Module({

    imports: [],
    exports: [],
    controllers: [TestController],
    providers: [TestService]

}) export class TestModule {};