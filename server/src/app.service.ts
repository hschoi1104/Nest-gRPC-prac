import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sum(numberArray: number[]): number {
    let sum = 0;
    numberArray.forEach((element) => sum += element)
    return sum;
  }
}
