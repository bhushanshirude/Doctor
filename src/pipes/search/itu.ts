import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class ItuPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(itu => {
      return itu.User.first_name.toLowerCase().includes(terms);
    });
  }
}
