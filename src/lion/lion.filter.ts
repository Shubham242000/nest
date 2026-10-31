import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, HttpException } from "@nestjs/common";

@Catch(ForbiddenException)
export class MyFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        throw new Error("new error")
    }
}