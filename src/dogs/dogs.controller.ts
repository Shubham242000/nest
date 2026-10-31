import { Controller, createParamDecorator, Get, Param, Query, UseFilters } from '@nestjs/common';
import { DogsService } from './dogs.service.js';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guard/AuthGuard.js';
import { CustomExceptionFilter } from '../filter/CustomFilter.js';

const CustomDecorator = createParamDecorator((data, ctx) => {
    return 'shubham'
})


@Controller('dogs')
export class DogsController {
    constructor(private dogsService: DogsService) { }

    @UseGuards(AuthGuard)
    @UseFilters(CustomExceptionFilter)
    
    @Get('happy')
    getHappyDog() {
        return this.dogsService.happyDog()
    }

    @Get('breed')
    getDogOnBreed(@Query() query: any) {
        console.log('param ', query.lab)
        return 'tom'
    }

    @Get('nemo')
    findNemo(@CustomDecorator() customDecorator: any) {
        console.log('custom - ', customDecorator)
    }
}
