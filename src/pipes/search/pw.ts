import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class PwPipe implements PipeTransform {

  transform(array: any[], terms: string): any[] {
    if (!array) return [];
    if (!terms) return array;
    terms = terms.toLowerCase();
    return array.filter(pw => {
      return pw.User.first_name.toLowerCase().includes(terms);
    });
  }
}
