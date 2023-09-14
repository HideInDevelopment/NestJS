import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { ItemsController } from './items/items.controller';
import { ProductosController } from './productos/productos.controller';
import { RecursosController } from './recursos/recursos.controller';
import { DatabaseModule } from './database/database.module';
import { TransientService } from './services/transient-service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AppController,
    TasksController,
    ItemsController,
    ProductosController,
    RecursosController,
  ],
  providers: [AppService, TransientService],
})
export class AppModule {}
