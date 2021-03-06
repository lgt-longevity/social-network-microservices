import { Module } from '@nestjs/common';
import { ContestController } from './contest.controller';
import { ContestService } from './contest.service';

@Module({
  imports: [],
  controllers: [ContestController],
  providers: [ContestService],
})
export class ContestModule {}
