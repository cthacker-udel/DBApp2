import { MongoCredentials } from './../config/mongo/MongoCredentials';
import { NestFactory } from '@nestjs/core';
import { ConnectionOptions, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { ExampleGuard } from './dbtest/dbuser/guards/dbtest.exampleguard.guard';
const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const connection = await createConnection(
        {...MongoCredentials as ConnectionOptions}
    );

    app.enableCors();
    app.use(cors());

    await app.listen(3005);
}
bootstrap();
