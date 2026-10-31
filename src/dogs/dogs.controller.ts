import { CanActivate, Controller, createParamDecorator, ExecutionContext, Get, Injectable, Query, Redirect, SetMetadata, UseGuards } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Observable } from 'rxjs';

export const CustomDecorator = createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
})

@Injectable()
class MyGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const handler = context.getHandler();
        console.log('handler - ', handler)
        const isAdmin = this.reflector.get('role', handler);
        console.log('is admin  ', isAdmin)
        return isAdmin === 'admin';
    }
}

@Controller('dogs')
export class DogsController {
    @Get()
    @SetMetadata('role', 'admin')
    @UseGuards(MyGuard)
    getAllDogs(@CustomDecorator() customDecorator: any,
        @Query('name') query: any,

    ) {
        console.log('custom decorator ', customDecorator);
        return query === 'tom' ? 'all dogs' : 'no dogs'
    }


    @Get('bark')
    // @Redirect('https://nestjs.com', 301)
    getDogs() {
        return "all dogs bark"
    }
}
