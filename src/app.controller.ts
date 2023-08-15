import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/users')
  // @UseFilters(new I18nValidationExceptionFilter())
  create(@Body() createUserDto: CreateUserDto): any {
    return `This action adds a new user: ${createUserDto.email}`;
  }
}
