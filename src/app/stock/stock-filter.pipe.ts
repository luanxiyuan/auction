import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], fieldName: string, searchValue: string): any {
    if(!fieldName || !searchValue) {
      return list;
    }
    return list.filter(item => {
      let itemFieldValue = item[fieldName].toLowerCase();
      return itemFieldValue.indexOf(searchValue.toLowerCase()) >= 0;
    })
  }

}
