import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searc',
})
export class MyLabPipe implements PipeTransform {

    transform(logbook: any[], terms: string): any[] {
        if (!logbook) return [];
        if (!terms) return logbook;
        terms = terms.toLowerCase();
        return logbook.filter(data => {
            return data.User.first_name.toLowerCase().includes(terms);
        });
    }
}
