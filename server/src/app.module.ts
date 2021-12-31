import { UserModule } from './modules/user/user.module';
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
  }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
