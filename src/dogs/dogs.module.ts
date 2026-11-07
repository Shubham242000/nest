import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller.js';
import { DogsService } from './dogs.service.js';
import { DynamicConfigModule } from '../dynamicConfig/dynamicConfig.module.js';

@Module({
  imports: [DynamicConfigModule],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule { }
