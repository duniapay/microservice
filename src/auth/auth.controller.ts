import { Body, Controller, Post, Get } from '@nestjs/common';
import { Payload } from 'src/types/payload';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { CreateManyDto, Crud, CrudController, CrudRequest, CrudService, GetManyDefaultResponse } from "@nestjsx/crud";
import { User } from './auth.entity';


@Crud({
  model: {
    type: User,
  },
})

@Controller('auth')
export class AuthController implements CrudController<User>  {
  constructor(public authService: AuthService) {}
  service: CrudService<User>;

  
}