import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withParent',
  pure: false
})
export class WithParentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map( t => {
      return {
        item: t,
        parent: value
      }
    });
  }

}
