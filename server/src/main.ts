import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ConnectionOptions, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TicketEntity } from './shared/entities/mongodb/public/TicketEntity.entity';
import { UserEntity } from './shared/entities/mongodb/public/User.entity';
const cors = require('cors');
const development = require('../config/development.json');

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const configService = app.get<ConfigService>(ConfigService);

    const connection = await createConnection({
        type: configService.get('mongo')['type'],
        name: configService.get('mongo')['name'],
        host: configService.get('mongo')['host'],
        url: configService.get('mongo')['url'],
        entities: [TicketEntity, UserEntity, './shared/entities/mongodb/public/*.ts', './shared/entities/mongodb/private/*/*.ts']
    });

    app.enableCors();
    app.use(cors());
    
    const swaggerConfig = new DocumentBuilder()
    .setTitle('Example Ticketing System')
    .setDescription('The Ticketing API Description')
    .setVersion('1.0')
    .addTag('tickets')
    .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);

    await app.listen(3005);
}
bootstrap();
