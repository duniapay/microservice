import { Payload } from 'src/types/payload';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { User } from './auth.entity';
export declare class AuthService extends TypeOrmCrudService<User> {
    constructor(repo: any);
    signPayload(payload: Payload): Promise<any>;
    validateUser(payload: Payload): Promise<string>;
}
