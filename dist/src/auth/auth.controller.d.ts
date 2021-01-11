import { AuthService } from './auth.service';
import { CrudController, CrudService } from "@nestjsx/crud";
import { User } from './auth.entity';
export declare class AuthController implements CrudController<User> {
    authService: AuthService;
    constructor(authService: AuthService);
    service: CrudService<User>;
}
