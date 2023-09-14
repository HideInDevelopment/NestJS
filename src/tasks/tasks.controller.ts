import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll() {
    return 'This method returns all tasks.';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This method return task with id ${id}`;
  }

  @Get(':name')
  findByName(@Param('name') name: string) {
    return `This methos return task with name ${name}`;
  }
}
