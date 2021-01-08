"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const sentry_interceptor_1 = require("./core/sentry.interceptor");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    bank() {
        return {
            message: 'Hello world!',
            secret: this.appService.vaultId(),
            environment: this.appService.vaultEnv(),
        };
    }
    momo() {
        return {
            message: 'Hello world!',
            secret: this.appService.vaultId(),
            environment: this.appService.vaultEnv(),
        };
    }
    creditcard() {
        return {
            message: 'Hello world!',
            secret: this.appService.vaultId(),
            environment: this.appService.vaultEnv(),
        };
    }
    address() {
        return {
            message: 'Hello world!',
            secret: this.appService.vaultId(),
            environment: this.appService.vaultEnv(),
        };
    }
    login() {
        return {
            message: 'Hello world!',
            secret: this.appService.vaultId(),
            environment: this.appService.vaultEnv(),
        };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('/bankaccount'),
    common_1.Render('bankaccount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "bank", null);
__decorate([
    common_1.Get('/momo'),
    common_1.Render('mobilemoney'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "momo", null);
__decorate([
    common_1.Get('/creditcard'),
    common_1.Render('creditcard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "creditcard", null);
__decorate([
    common_1.Get('/address'),
    common_1.Render('address'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "address", null);
__decorate([
    common_1.Get('/login'),
    common_1.Render('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
AppController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    common_1.Controller('/collection'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map