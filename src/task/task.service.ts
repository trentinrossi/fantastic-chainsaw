import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, taskStatus } from './entities/task.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class TaskService {
  private data: Task[]

  create(createTaskDto: CreateTaskDto) {

    if (!createTaskDto.title) {
      throw new BadRequestException('Title is required')
    }

    const data = {
      id: uuid(),
      userId: uuid(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: taskStatus.PENDING,
      createdAt: new Date()
    } as Task

    this.data.push(data)
    return this.data;
  }

  findAll() {
    return this.data;
  }

  findOne(id: string) {
    return this.data.filter((entries) => entries.id = id)
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.data.map((task) => {
      if (task.id == id) {
        task.title = updateTaskDto.title;
        task.description = updateTaskDto.description;
        task.updatedAt = new Date();
      }
    })
  }

  remove(id: string) {
    return 0
  }
}
