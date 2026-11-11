import { Controller, Get, SetMetadata, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/AuthGuard.js';
import { AuthFilter } from '../filters/AuthFilter.js';

@Controller('dogs')
export class DogsController {
    @Get()
    // @SetMetadata('role', 'admin')
    @UseGuards(AuthGuard)
    @UseFilters(AuthFilter)
    getDogs() {
        return "all dogs"
    }
}
