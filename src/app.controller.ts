import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { SentryInterceptor } from './core/sentry.interceptor';

@UseInterceptors(SentryInterceptor)
@Controller('/collection')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bankaccount')
  @Render('bankaccount')
  bank() {
    return {
      message: 'Hello world!',
      secret: this.appService.vaultId(),
      environment: this.appService.vaultEnv(),
    };
  }

  @Get('/momo')
  @Render('mobilemoney')
  momo() {
    return {
      message: 'Hello world!',
      secret: this.appService.vaultId(),
      environment: this.appService.vaultEnv(),
    };
  }
  @Get('/creditcard')
  @Render('creditcard')
  creditcard() {
    return {
      message: 'Hello world!',
      secret: this.appService.vaultId(),
      environment: this.appService.vaultEnv(),
    };
  }
  @Get('/address')
  @Render('address')
  address() {
    return {
      message: 'Hello world!',
      secret: this.appService.vaultId(),
      environment: this.appService.vaultEnv(),
    };
  }

  @Get('/login')
  @Render('index')
  login() {
    return {
      message: 'Hello world!',
      secret: this.appService.vaultId(),
      environment: this.appService.vaultEnv(),
    };
  }
}
