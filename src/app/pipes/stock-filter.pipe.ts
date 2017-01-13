import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filterString = args[0];
    let resultValue = value;
    if (args === null || args === undefined || args === '' || filterString =='') {
      return value;
    } else {
      let filter = args.toLowerCase();
      resultValue = filter?
        value.filter( (stock) => {
          return stock.stockName.toLocaleLowerCase().indexOf(filter) > -1 ||
                 stock.stockCode.toLocaleLowerCase().indexOf(filter) > -1
        })
        : '';
    }

    return resultValue;
  }

}
