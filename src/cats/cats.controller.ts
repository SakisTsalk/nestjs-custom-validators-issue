import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post('create')
  async createDog(@Body() createCatDto: CreateCatDto): Promise<CreateCatDto> {
    return createCatDto;
  }
}
