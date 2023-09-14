import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
  UseFilters,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemDto } from 'src/modules/dtos';
import { Response } from 'express';
import { CustomExceptionFilter } from 'src/utils/custom-exception-filter';
import { TransformInterceptor } from 'src/utils/transform-interceptor';

@Controller('items')
@UseFilters(new CustomExceptionFilter())
@UseInterceptors(TransformInterceptor)
export class ItemsController {
  private readonly items = [];

  @Get()
  findAll() {
    return ['item1', 'item2'];
  }

  @Get(':name')
  findOne(@Param('name') name: string): string {
    const item = this.items.find((item) => item.name === name);
    if (!item) throw new NotFoundException(`Item with name ${name} not found`);

    return `Item ${name} found!`;
  }

  @Post()
  create(
    @Body(new ValidationPipe()) createItemDto: CreateItemDto,
    @Res() res: Response,
  ) {
    const exists = this.items.find((item) => item.name === createItemDto.name);

    if (exists)
      throw new HttpException('Item already exists', HttpStatus.BAD_REQUEST);
    //Here goes the logic to save the item
    const newItem = {
      id: Date.now(),
      ...createItemDto,
    };
    this.items.push(newItem);
    res.status(201).send(newItem);
  }
}
