import { Module } from '@nestjs/common';
import { MockAsyncModule } from '../mock-async/mock-async.module';
import { DogsController } from './dogs.controller';
@Module({
  imports: [MockAsyncModule],
  controllers: [DogsController],
})
export class DogsModule {}
