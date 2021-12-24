import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExampleGuard } from './dbtest/dbuser/guards/dbtest.exampleguard.guard';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalGuards(new ExampleGuard());
    await app.listen(3005);
}
bootstrap();
