import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { CustomException } from "../exception/CustomException.js";


export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const handler = context.getHandler();
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const token = req.headers.authorisation ?? '';
        if (!token) {
            throw new CustomException('you cant access this lol');
        }
        return true;
    }
}