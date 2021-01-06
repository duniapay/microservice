import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, './dist', 'assets'));
  app.setBaseViewsDir(join(__dirname, './dist', 'views'));
  app.setViewEngine('hbs');
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
