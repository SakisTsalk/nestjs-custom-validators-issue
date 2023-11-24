import { Body, Controller, Post } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {
  @Post('create')
  async createDog(@Body() createDogDto: CreateDogDto): Promise<CreateDogDto> {
    return createDogDto;
  }
}
