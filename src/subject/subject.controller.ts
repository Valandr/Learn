import { Controller, Get } from '@nestjs/common';

@Controller('subject')
export class SubjectController {
  @Get()
  findAll() {
    return ['Français', 'Maths', 'Techno'];
  }
}
