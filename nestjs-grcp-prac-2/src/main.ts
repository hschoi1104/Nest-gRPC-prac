import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import { Transport } from '@nestjs/microservices'
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app', // 프로토파일의 패키지명
    protoPath: join(__dirname, '../src/proto/app.proto'), //프로토 파일 경로
    // url: 'localhost:5000'
    // credentials:
  }
}
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log('grpc server is running')
  })
}
bootstrap();
