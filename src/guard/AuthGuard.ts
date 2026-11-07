import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { CustomException } from "../exception/CustomException.js";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const handler = context.getHandler();
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const token = req.headers.authorisation ?? '';

        const role = this.reflector.get('role', context.getHandler())
        const isAdmin = role === 'admin'

        if (!token || !isAdmin) {
            throw new CustomException('you cant access this lol');
        }

        return true;
    }
}