import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return ['123'];
  }

  @Get(':id')
  getAllIncomeById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
