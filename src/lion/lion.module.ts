import { Module } from '@nestjs/common';
import { LionController } from './lion.controller.js';
import { LionService } from './lion.service.js';

@Module({
  controllers: [LionController],
  providers: [LionService]
})
export class LionModule {}
