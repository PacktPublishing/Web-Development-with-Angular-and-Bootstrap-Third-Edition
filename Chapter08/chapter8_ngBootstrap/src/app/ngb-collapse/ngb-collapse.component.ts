import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-collapse',
  templateUrl: './ngb-collapse.component.html',
  styleUrls: ['./ngb-collapse.component.scss']
})
export class NgbCollapseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isCollapsed = true;

}
