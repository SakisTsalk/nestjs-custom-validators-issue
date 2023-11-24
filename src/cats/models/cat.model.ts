import { Validate } from 'class-validator';
import { CustomValidatorPipe } from '../../validators/custom-validator.pipe';

export class CatModel {
  @Validate(CustomValidatorPipe)
  cat: CatModel;
}
