import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    bank(): {
        message: string;
        secret: string;
        environment: string;
    };
    momo(): {
        message: string;
        secret: string;
        environment: string;
    };
    creditcard(): {
        message: string;
        secret: string;
        environment: string;
    };
    address(): {
        message: string;
        secret: string;
        environment: string;
    };
    login(): {
        message: string;
        secret: string;
        environment: string;
    };
}
