import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './modules/data/data.module';
import configuration from './shared/config/configuration';
@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      ignoreEnvFile: true
  }), DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
