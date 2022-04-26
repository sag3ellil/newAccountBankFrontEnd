import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewAccountBankFront';

  constructor(private Router:Router)
  {

  }
  goToDisplay()
  {
    this.Router.navigate(["/displayDetails"]);
  }

  goToAdd()
  {
    this.Router.navigate(["/addAccount"]);
  }
}
