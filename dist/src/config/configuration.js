"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    sentry: process.env.SENTRY_DSN,
    vaultId: process.env.VAULT_ID,
    vaultSecret: process.env.VAULT_SECRET,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
});
//# sourceMappingURL=configuration.js.map