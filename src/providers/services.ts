// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AllServiceProvider {
    // public user_api = "http://192.168.0.10/healthcapitol/";
    public user_api: string;
    constructor(public storage: Storage) {
        console.log('Hello AllServiceProvider Provider');
        // this.user_api = "http://192.168.0.10/healthcapitol/";
        this.user_api = "http://healthcapitol.org/";
    }
}