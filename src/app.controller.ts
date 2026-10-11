import { Controller, ForbiddenException, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AppService } from './app.service.js';
import { MyFilter } from './commons/filters/my-filter.js';


@Controller()
@UseFilters(MyFilter)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/app')
  getHello(): string {
    // return this.appService.getHello();
    throw new ForbiddenException();
  }

  @Get('/app1')
  getHello1() {
    throw new ForbiddenException()
  }
}
