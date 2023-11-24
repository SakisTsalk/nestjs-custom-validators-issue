import { Validate } from 'class-validator';
import { CustomValidatorPipe } from '../../validators/custom-validator.pipe';
import { DogModel } from '../models/dog.model';

export class CreateDogDto {
  @Validate(CustomValidatorPipe)
  dog: DogModel;
}
