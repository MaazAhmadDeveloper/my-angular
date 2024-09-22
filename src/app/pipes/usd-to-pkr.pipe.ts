import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToPkr'
})
export class UsdToPkrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x, y] = args;
    return (value * x)/y;
  }

}
