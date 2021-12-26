import { TestModule } from './dbtest/_test_/test.module';
import { DBTestModule } from './dbtest/dbtest.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
