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
} from '@nestjs/common';
import { CreateItemDto } from 'src/modules/dtos';
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  private readonly items = [];

  @Get(':name')
  findOne(@Param('name') name: string): string {
    const item = this.items.find((item) => item.name === name);
    if (!item) throw new NotFoundException(`Item with name ${name} not found`);

    return `Item ${name} found!`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
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
