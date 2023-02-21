import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class HealthController {
  @Get()
  getHealth(): string {
    const timestamp = new Date().toISOString();
    return JSON.stringify({ timestamp }, null, 2);
  }
}
