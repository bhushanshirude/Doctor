import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'labsearch',
})
export class MyLabPipe implements PipeTransform {

    transform(arrays: any[], terms: string): any[] {
        if (!arrays) return [];
        if (!terms) return arrays;
        terms = terms.toLowerCase();
        return arrays.filter(lab => {
            return lab.pathlab_reports.investigation_id.toLowerCase().includes(terms);
        });
    }
}
