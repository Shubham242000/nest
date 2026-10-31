import { CanActivate, ExecutionContext, ForbiddenException, HttpException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class MyGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const { getRequest } = context.switchToHttp();
        const req = getRequest();
        const token = req.headers.authorisation;

        // is Admin check 
        const isAdmin = this.reflector.get('role', context.getHandler()) === 'admin'
        if (token && isAdmin) return true;
        throw new ForbiddenException()
    }
}