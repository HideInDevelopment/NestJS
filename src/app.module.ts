import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { ItemsController } from './items/items.controller';
import { ProductosController } from './productos/productos.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TasksController,
    ItemsController,
    ProductosController,
  ],
  providers: [AppService],
})
export class AppModule {}
