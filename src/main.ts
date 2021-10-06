import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // will ensure endpoints are protected from receiving the incorrect data
  app.useGlobalPipes( new ValidationPipe());
  // enabling cors so frontend can access this endpoints
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
