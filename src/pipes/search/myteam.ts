import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searches',
})
export class MyplayerPipe implements PipeTransform {

    transform(array: any[], te: string): any[] {
        if (!array) return [];
        if (!te) return array;
        te = te.toLowerCase();
        return array.filter(doc => {
            return doc.a.member_name.toLowerCase().includes(te);
        });
    }
}
