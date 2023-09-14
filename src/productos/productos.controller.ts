import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ProdcutDto } from 'src/modules/dtos';

@Controller('productos')
export class ProductosController {
  private products = [];

  @Put(':id')
  updateProducts(
    @Param('id') id: string,
    @Body() productDto: ProdcutDto,
  ): string {
    const productExists = this.products.find(
      (product) => product.name === productDto.name,
    );

    if (!productExists)
      throw new NotFoundException(`Product with ID ${id} not found`);

    productExists.name = productDto.name;
    productExists.price = productDto.price;

    return `Product with ID ${id} updated succesfully`;
  }
}
