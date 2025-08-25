import { Injectable, NestMiddleware, Req } from '@nestjs/common';
import { expressjwt } from 'express-jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // const token = expressjwt
    next();
  }
}
