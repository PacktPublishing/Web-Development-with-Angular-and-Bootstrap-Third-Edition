import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _appAuthService : AppAuthService, private router : Router) { }

  ngOnInit() {
    this._appAuthService.logout();
     this.router.navigate(['/login']);
  }

}
