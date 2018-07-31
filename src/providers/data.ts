import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { UserData } from './user-data';

@Injectable()
export class Data {

    items: any;



    constructor(public http: Http, public user: UserData) {

        this.items = [
            { title: 'Rajnadini M', address: 'Pimple Sudhagar Pune', age: '28 Year', admit_date: '22 May 2018', ward: 'OPD', condition: 'Normal', genedar: 'Female' },
            { title: 'Rajendra Bhaghwat', address: 'Shivaji nagar Pune', age: '40 Year', admit_date: '2 May 2018', ward: 'OPD', condition: 'Normal', genedar: 'Male' },
            { title: 'lamini K', address: 'Sangvi Pune', age: '32 Year', admit_date: '2 June 2018', ward: 'ICU', condition: 'Normal', genedar: 'Female' },
            { title: 'Ram', address: 'nashik', age: '35 Year', admit_date: '30 May 2018', ward: 'OT', condition: 'High', genedar: 'Male' },
            { title: 'Nikhil C', address: 'Mumbai', age: '12 Year', admit_date: '12 May 2018', ward: 'HRD', condition: 'High', genedar: 'Male' },
            { title: 'Sachin Kulkarni', address: 'Thane', age: '19 Year', admit_date: '22 June 2018', ward: 'ICU', condition: 'High', genedar: 'Male' }
        ]

    }

    filterItems(searchTerm) {

        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

}