import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalPipes(new I18nValidationPipe());
  // app.useGlobalFilters(new I18nValidationExceptionFilter());

  await app.listen(3000);
}

bootstrap();
