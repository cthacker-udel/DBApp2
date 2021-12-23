import { DBTestController } from './dbtest.controller';
import { DBTestService } from './dbtest.service';
import { Module } from "@nestjs/common";



@Module({
    imports: [],
    exports: [DBTestService],
    providers: [DBTestService],
    controllers: [DBTestController]
}) export class DBTestModule {};
