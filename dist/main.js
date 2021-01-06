"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const Sentry = require("@sentry/node");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
    });
    app.use(helmet());
    app.setGlobalPrefix('api');
    app.useStaticAssets(path_1.join(__dirname, './dist', 'assets'));
    app.setBaseViewsDir(path_1.join(__dirname, './dist', 'views'));
    app.setViewEngine('hbs');
    await app.listen(process.env.SERVER_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map