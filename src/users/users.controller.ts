import { Controller, ForbiddenException, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        throw new ForbiddenException()
    }
}
