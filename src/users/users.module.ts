import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { MyFilter } from '../commons/filters/my-filter.js';

@Module({
  controllers: [UsersController],
  providers: [
    { provide: 'APP_FILTER', useClass: MyFilter }
  ]
})
export class UsersModule { }
