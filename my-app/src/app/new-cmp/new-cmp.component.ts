import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  welcome = "Entered in the new-cmp"

  constructor(private myservice : MyserviceService) { }
// todaydate;
  ngOnInit() {

  }
}
