import { CanActivate, Controller, ExecutionContext, Get, Injectable, SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Reflector } from '@nestjs/core';



@Injectable()
class AuthGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): any {
    const method = context.getHandler()

    const isPublic = this.reflector?.get<boolean>('isPublic', context.getHandler());

    console.log('-- ', isPublic)
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    // the method about to run, e.g. getUsers
    const run = context.getClass()     // the controller class, e.g. UsersController

    const token = request.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    return true;
  }
}


@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @SetMetadata('isPublic', true)
  findAll(): string {
    return 'all'
  }
}
