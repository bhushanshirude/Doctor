import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class ErPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(er => {
      return er.User.first_name.toLowerCase().includes(terms);
    });
  }
}
