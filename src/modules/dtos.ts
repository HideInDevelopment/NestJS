import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsInt()
  readonly price: number;
}

export class ProdcutDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
