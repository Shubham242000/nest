import { HttpException, HttpStatus } from "@nestjs/common";

// my error
export class CustomException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}