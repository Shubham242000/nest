import { Controller, Get } from "@nestjs/common";

function Note(_: any, __: any, descriptor: any) {
    console.log('decorator')
    const fn = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log('hit')
        const result = fn.apply(this, args);
        return result;
    }
}

@Controller('cats')
export class CatsController {
    @Get('breed')
    // decorator
    @Note // method decorator.
    getAllCats() {
        return 'all Cats'
    }
}