import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}
@Controller()
export class AppController {
  private logger = new Logger('AppController')

  constructor(private appService: AppService) { }

  @GrpcMethod('AppController', 'sum')
  //@GrpcMethod()
  sum(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    return { sum: this.appService.sum(numberArray.data) };
  }
}
// this.logger.log('Adding' + numberArray.data.toString());
  // AppController proto 파일 매핑
  //클래스 명이 동일하다면 안적어도 된다.