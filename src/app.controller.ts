import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { I18nValidationExceptionFilter } from 'nestjs-i18n';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseFilters(new I18nValidationExceptionFilter())
  create(@Body() createUserDto: CreateUserDto): any {
    return `This action adds a new user: ${createUserDto.email}`;
  }
}
