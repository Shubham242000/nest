import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class DiskService {
    constructor(private readonly powerServive: PowerService) { }
    getData() {
        this.powerServive.supplyPower('10');
        return 'data!'
    }
}
