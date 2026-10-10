import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module.js';
import { UsersController } from './users/users.controller.js';
import { UsersService } from './users/users.service.js';
import { UsersModule } from './users/users.module.js';
import { UserModule } from './user/user.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "better-sqlite3",
    database: 'db.sqlite',
    entities: [],
    synchronize: true
  }),
    ReportsModule,
    UsersModule,
    UserModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
