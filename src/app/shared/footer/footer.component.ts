import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html',
    // styles: [`
    // .footer {
    //     position: absolute;
    //     bottom: 0;
    //     width: 100%;
    // }
    // `]
})

export class FooterComponent{
    test : Date = new Date();
}
