import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';
@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    // 프로토파일과의 연결
    this.grpcService = this.client.getService<IGrpcService>('AppController')
  }

  @Post('add')
  async sum(@Body('data') data: number[]) {
    return this.grpcService.sum({ data });
  }
}

//  private logger = new Logger('AppController')
//this.logger.log('Adding' + data.toString());
