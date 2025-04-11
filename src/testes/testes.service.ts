import { Injectable } from '@nestjs/common';
import { CreateTestisDto } from './dto/create-testis.dto';
import { UpdateTestisDto } from './dto/update-testis.dto';

@Injectable()
export class TestesService {
  create(createTestisDto: CreateTestisDto) {
    return 'This action adds a new testis';
  }

  findAll() {
    return `This action returns all testes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testis`;
  }

  update(id: number, updateTestisDto: UpdateTestisDto) {
    return `This action updates a #${id} testis`;
  }

  remove(id: number) {
    return `This action removes a #${id} testis`;
  }
}
