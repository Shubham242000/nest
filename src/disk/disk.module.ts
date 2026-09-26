import { Module } from '@nestjs/common';
import { DiskService } from './disk.service.js';
import { PowerModule } from '../power/power.module.js';

@Module({
  providers: [DiskService],
  imports: [PowerModule],
  exports: [DiskService]
})
export class DiskModule { }
