import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class GwPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(gw => {
      return gw.User.first_name.toLowerCase().includes(terms);
    });
  }
}
