import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'son',
    template: `<h2>Hi. I'm a son, and my name is {{_name}}.</h2>`
})
export class SonComponent implements OnInit {
    _name: string;
    constructor() {
        console.log("The son component was just instantiated.");
    }
    ngOnInit(){
        console.log("The son component is now fully initialized.");
    }
    @Input()
    set Name(name : string ) {
        this._name = (name && name.trim()) || "I am a son."; 
    }
    get Name() {
        return this._name;
    }
}