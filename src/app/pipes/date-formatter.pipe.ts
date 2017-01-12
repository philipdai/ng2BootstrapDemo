import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {

  }

  transform(value: any, args?: any): any {
    let result;
    let parsedDate = Date.parse(value);

    if (isNaN(parsedDate)) {
      result = "";
    }
    else {
      result = this.datePipe.transform(value, 'MM-dd-yyyy');
    }

    return result;
  }

}
