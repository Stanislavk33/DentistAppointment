import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatDecimal'})
export class DecimalPipe implements PipeTransform {
  transform(value: number): any {
    if (Math.floor(value).toString() == '00'){
      return Math.trunc(value);
    }
    return value;
  }
}
