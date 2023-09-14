import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  NotImplementedException,
  Param,
  Post,
  Put,
  Res,
  UnauthorizedException,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('recursos')
export class RecursosController {
  /**
   * TODO Implements logic to return user authentication
   * @returns true if user is authenticated, false if not
   */
  private userGetAuth(): boolean {
    return false;
  }

  private userHasEditAuth(id: string): boolean {
    return true;
  }

  private resourceAlreadyExists(name: string): boolean {
    return true;
  }

  @Get()
  obtainResources() {
    /**
     * *To verify if the user get the authorization
     */
    try {
      if (!this.userGetAuth())
        throw new UnauthorizedException(
          `User don't have permission to access this resource`,
        );

      return 'Resources obtain succesfully';
    } catch (error) {
      throw new InternalServerErrorException(
        'An internal error was produced while obtaining resources',
      );
    }
  }

  @Get(':id')
  obtainResourceById(@Param('id') id: string) {
    throw new NotImplementedException(
      'This function is not already implemented',
    );
  }

  @Post()
  createResource(@Body() data: any) {
    if (this.resourceAlreadyExists(data.name))
      throw new ConflictException('Resource with that name already exists');
    else {
      if (!data || !data.name)
        throw new BadRequestException('Incorrect or incomplete data provide');

      return 'Resource create succesfully';
    }
  }

  @Put(':id')
  updateResource(@Param('id') id: string, @Res() res: Response) {
    if (!this.userHasEditAuth(id))
      throw new ForbiddenException(
        `User with id ${id} can not update that resource`,
      );

    return res.status(200).send('Resource update succesfully');
  }
}
