import { Component , OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector : 'app-home-page',
    templateUrl : './home-page.component.html',
    styleUrls : ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
    public case : any;

    constructor(private storage : StorageService , private router : ActivatedRoute) {  

    }

    ngOnInit() {
        this.router.params.subscribe(param => {
            for(let i = 0 ; i < this.storage.title.length ; i++) {
                if (this.storage.title[i] == param.title) {
                    this.case = this.storage.title[i];
                }
            }
        });
        this.storage.doCheck();
    }
}
