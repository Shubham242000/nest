import { Controller, Get } from '@nestjs/common';

import { DiskService } from '../disk/disk.service.js';
import { CpuService } from '../cpu/cpu.service.js';

@Controller('computer')
export class ComputerController {
    constructor(private cpuService: CpuService,
        private diskService: DiskService
    ) { }

    @Get()
    run() {
        return [
            this.cpuService.compute(20, 10),
            this.diskService.getData()
        ]
    }
}
