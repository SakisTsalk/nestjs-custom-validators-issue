import { Module } from '@nestjs/common';
import { MockAsyncModule } from '../mock-async/mock-async.module';
import { CatsController } from './cats.controller';
@Module({
  imports: [MockAsyncModule],
  controllers: [CatsController],
})
export class CatsModule {}
