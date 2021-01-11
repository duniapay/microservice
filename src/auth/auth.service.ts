import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/payload';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { User } from './auth.entity';


@Injectable()
export class AuthService extends TypeOrmCrudService<User> {

  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' });
  }

  async validateUser(payload: Payload) {
    return '';
  }
  
}

