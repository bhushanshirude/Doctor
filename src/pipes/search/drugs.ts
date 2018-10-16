import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sear',
})
export class DrugsPipe implements PipeTransform {

    transform(arrays: any[], term: string): any[] {
        if (!arrays) return [];
        if (!term) return arrays;
        term = term.toLowerCase();
        return arrays.filter(med => {
            return med.Medicines.name.toLowerCase().includes(term);
        });
    }
}
