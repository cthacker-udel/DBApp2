import { Module } from '@nestjs/common';
import { AuthUserModule } from './authenticationmodule/user/user.module';

@Module({
  imports: [AuthUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
