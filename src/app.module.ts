import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { ContestModule } from './contest';
import { ImageModule } from './image';
import { StorageModule } from './storage';
import { UserModule } from './user';

@Module({
  imports: [AuthModule, ContestModule, ImageModule, StorageModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
