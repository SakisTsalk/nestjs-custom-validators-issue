import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockAsyncModule } from './mock-async/mock-async.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { CustomValidatorPipe } from './validators/custom-validator.pipe';

@Module({
  imports: [MockAsyncModule, CatsModule, DogsModule],
  controllers: [AppController],
  providers: [AppService, CustomValidatorPipe],
})
export class AppModule {}
