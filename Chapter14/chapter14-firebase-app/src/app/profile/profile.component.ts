import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../app-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _appAuthService : AppAuthService) { }

  ngOnInit() {
  }

}
