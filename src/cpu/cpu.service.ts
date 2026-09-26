import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class CpuService {
    constructor(private readonly powerService: PowerService) {
    }

    compute(a: number, b: number) {
        console.log('Drawing 10 watts from power service')
        this.powerService.supplyPower('10')
    }
}
