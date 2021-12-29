import { NestFactory } from '@nestjs/core';
import { ConnectionOptions, createConnection } from 'typeorm';
import { AppModule } from './app.module';
const cors = require('cors');
const development = require('../config/development.json');

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(cors());

    await app.listen(3005);
}
bootstrap();
