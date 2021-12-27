import { Module } from '@nestjs/common';
import { AuthServiceModule } from './authenticationmodule/user/authservice/authservice.module';
import { AuthUserModule } from './authenticationmodule/user/user.module';

@Module({
  imports: [AuthServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
