import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  // get an environment variable
  getHello(): string {
    return 'Hello World!';
  }

  port(): string {
    return this.configService.get<string>('PORT');
  }

  vaultId(): string {
    return this.configService.get<string>('VAULT_ID');
  }
  vaultEnv(): string {
    return this.configService.get<string>('VAULT_ENVIRONMENT');
  }
}
