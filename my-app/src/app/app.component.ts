import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  emailid;
  formdata;

  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"];

    isavailable=true;

    clickme(event){
      this.isavailable=!this.isavailable
    }
    monthchange(event){
      alert("The Dropdown has been Changed");
      console.log(event);
    }
    constructor(private myservice : MyserviceService) {}
    personaldata=[];
    // todaydate:Date;
    ngOnInit(){
      this.myservice.getData().subscribe((data)=>{
        this.personaldata=Array.from(Object.keys(data),k=>data[k]);
        console.log(Array.from(this.personaldata));
      });
      this.formdata = new FormGroup({ 
        email: new FormControl('angular@gmail.com',Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
        ])),
        passwd: new FormControl("abcd1234")});
    //   this.todaydate= this.myservice.showtodatdate()
    //   console.log(this.myservice.servicetext);
    //   this.myservice.servicetext="Has been changed by app component";
    }
    onClickSubmit(data){
     this.emailid=data.email;   
    }
}
