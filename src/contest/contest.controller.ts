import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContestService } from './contest.service';

@ApiTags('Contest')
@Controller('contest')
export class ContestController {
  constructor(private readonly contestService: ContestService) {}

  @Get()
  getContests(): void {
    return this.contestService.getContests();
  }
}
