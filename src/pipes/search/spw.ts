import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SpwPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(spw => {
      return spw.User.first_name.toLowerCase().includes(terms);
    });
  }
}
