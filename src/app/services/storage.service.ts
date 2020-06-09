import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class StorageService {
    public toShow : boolean = false;
    public title : Array<any> = ['HOME','ABOUT'];

    constructor() { 

    }

    public doCheck = () => {
        if (localStorage.getItem('date') == null) {
            if (localStorage.getItem('case') == null) {
                setTimeout(() => {
                    this.toShow = true;
                },2000);
            }
        }
    }

    public sendDates = function() {
        let dates = new Date();
        localStorage.setItem('date',JSON.stringify(dates));
        this.toShow = false;
        setTimeout(() => {
            localStorage.removeItem('date');
        },120000);
    }

    public toRemove = function() {
        this.toShow = false;
        if (this.toShow == false) {
            this.case = 'no';
            localStorage.setItem('case',this.case);
        }
    }
}
