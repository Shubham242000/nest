import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class AuthFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const res = host.switchToHttp().getResponse() // Express Response
        const status = exception.getStatus();

        res.status(status).json({
            message: exception.message,
            status,
        });
    }
}