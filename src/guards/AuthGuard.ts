import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { MyException } from "../exception/MyException.js";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const role = this.reflector.get('role', context.getHandler());
        const isAdmin = role === 'admin';
        if (!isAdmin) throw new MyException("no entry")
        return true;
    }
}