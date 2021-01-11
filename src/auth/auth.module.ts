
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core/constants';
import { HttpExceptionFilter } from 'src/shared/http-exception.filter';
import { LoggingInterceptor } from 'src/shared/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService,{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  }, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
