import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics=['computer science', 'Information system' , 'Other'];


 userModel = new User('Lila','lila@gmail.com',+9476271431,'','morning',true);
}
