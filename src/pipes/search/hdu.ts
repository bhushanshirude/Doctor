import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class HduPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(hdu => {
      return hdu.User.first_name.toLowerCase().includes(terms);
    });
  }
}
