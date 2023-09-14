import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor() {
    super('Custom Message', HttpStatus.BAD_REQUEST);
  }
}
