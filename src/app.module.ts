import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CatsModule } from './cats/cats.module.js';
import { DogsController } from './dogs/dogs.controller.js';
import { DogsModule } from './dogs/dogs.module.js';
import { LionModule } from './lion/lion.module.js';

@Module({
  imports: [CatsModule, DogsModule, LionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
