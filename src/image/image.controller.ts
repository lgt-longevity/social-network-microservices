import {
  Controller,
  Get,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ImageService } from './image.service';

@ApiTags('Image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getImage(): void {
    return this.imageService.getImage();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File): void {
    return this.imageService.uploadImage();
  }

  @Put('likeVote')
  likeVote(): void {
    return this.imageService.likeVote();
  }

  @Put('innapropriateVote')
  innapropriateVote(): void {
    return this.imageService.innapropriateVote();
  }
}
