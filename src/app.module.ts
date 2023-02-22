import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HealthController} from "./health.controller";
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
