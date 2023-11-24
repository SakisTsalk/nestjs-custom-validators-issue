import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MockAsyncService } from '../mock-async/mock-async.service';
import { CatModel } from '../cats/models/cat.model';
import { DogModel } from '../dogs/models/dog.model';
import { CreateCatDto } from '../cats/dto/create-cat.dto';
import { CreateDogDto } from '../dogs/dto/create-dog.dto';

@ValidatorConstraint({ async: true })
@Injectable()
export class CustomValidatorPipe implements ValidatorConstraintInterface {
  constructor(private mockAsyncService: MockAsyncService) {}

  async validate(
    value: CatModel | DogModel,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    // The function is not been triggered when http://localhost:3000/dogs/create api call is called, but it is triggered when http://localhost:3000/cats/create is called

    console.log('fired');
    // If I remove the checks for the instanceof the Dto objects it works fine. But in my business case those checks are needed if I want to reuse the same validation pipe.
    // But I'd at least expect an error thrown by NestJS, or some documentation hints about it.
    if (validationArguments.object instanceof CreateCatDto) {
      console.log('cat');
    }
    if (validationArguments.object instanceof CreateDogDto) {
      console.log('dog');
    }
    await this.mockAsyncService.mockAsyncOperation();
    return true;
  }
}
