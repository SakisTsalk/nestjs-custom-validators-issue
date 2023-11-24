import { CatModel } from '../models/cat.model';
import { Validate } from 'class-validator';
import { CustomValidatorPipe } from '../../validators/custom-validator.pipe';

export class CreateCatDto {
  @Validate(CustomValidatorPipe)
  cat: CatModel;
}
