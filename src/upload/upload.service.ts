import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  handleUpload(file: Express.Multer.File) {
    return {
      message: 'Archivo subido exitosamente',
      originalName: file.originalname,
      size: file.size,
      path: file.path,
      mimetype: file.mimetype,
    };
  }
}