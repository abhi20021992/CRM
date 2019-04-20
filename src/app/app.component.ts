import { Component} from '@angular/core';
import { AuthenticationService } from './services/appAuthentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authentication: AuthenticationService){

  }

  isUserAuthenticated(){
    return this.authentication.isUserAuthenticated();
  }
}
