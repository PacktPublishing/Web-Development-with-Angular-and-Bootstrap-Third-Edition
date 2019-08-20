import {Component } from '@angular/core';
@Component({
    selector: 'app-dad',
    template: `<h1>Hello. {{message}}.</h1><br/> 
    <son *ngFor="let name of arrSonNames" 
    [Name]="name">
    </son>
    `,
})
export class DadComponent {
    message = 'I\'m a Dad';
    arrSonNames = ['Justin', 'Haley', 'Brendan'];
}