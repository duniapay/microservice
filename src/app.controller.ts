import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { SentryInterceptor } from './core/sentry.interceptor';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
