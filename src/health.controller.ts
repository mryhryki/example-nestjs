
import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class HealthController {
  @Get()
  @Header("Content-Type", "application/json; charset=utf-8")
  getHealth(): string {
    const timestamp = new Date().toISOString();
    return JSON.stringify({ timestamp }, null, 2);
  }
}
