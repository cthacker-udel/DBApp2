import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/config/configuration';
@Module({
  imports: [ConfigModule.forRoot({
      load: [configuration]
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
