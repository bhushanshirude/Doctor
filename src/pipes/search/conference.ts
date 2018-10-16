import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'conf',
})
export class ConferPipe implements PipeTransform {

    transform(array: any[], terms: string): any[] {
        if (!array) return [];
        if (!terms) return array;
        terms = terms.toLowerCase();
        return array.filter(at => {
            return at.hc_conferences.conference_title.toLowerCase().includes(terms);
        });
    }
}
