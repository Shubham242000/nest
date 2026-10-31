import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { LionService } from './lion.service.js';
import { MyGuard } from './lion.guard.js';
import { Roles } from './lion.role.js';
import { MyFilter } from './lion.filter.js';

@Controller('lion')
export class LionController {
    constructor(private lionService: LionService) { }  // Dependency Injection. 
    @Get('sound')
    @Roles('admin')
    @UseFilters(MyFilter)
    @UseGuards(MyGuard)
    getSound() {
        return this.lionService.lionSound();
    }
}
