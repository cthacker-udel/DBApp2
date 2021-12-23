import { AppModule } from './../app.module';
import { DBTestController } from './dbtest.controller';
import { DBTestService } from './dbtest.service';
import { CacheModule, Module } from "@nestjs/common";



@Module({
    imports: [CacheModule.register()],
    exports: [DBTestService],
    providers: [DBTestService],
    controllers: [DBTestController]
}) export class DBTestModule {};
