import { Component } from '@angular/core';
import { AppAuthService } from './app-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AutoStop';

  constructor(private _appAuthService : AppAuthService) { }

}
