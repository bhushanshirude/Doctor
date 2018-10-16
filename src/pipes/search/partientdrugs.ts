import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'patientsearch',
})
export class PatientdrugsPipe implements PipeTransform {

    transform(array: any[], terms: string): any[] {
        if (!array) return [];
        if (!terms) return array;
        terms = terms.toLowerCase();
        return array.filter(drug => {
            return drug.patient_drugs.medicine_id.toLowerCase().includes(terms);
        });
    }
}
