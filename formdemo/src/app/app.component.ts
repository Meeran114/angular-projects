import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formdemo';

  constructor(private fb : FormBuilder){}

  mineform !: FormGroup;
  mineralList = [1234,5678];
  mineralName = ['Earth','Rough Stone'];
  mineralUnit =['CPM','CPM'];

  ngOnInit(){
    this.mineform = this.fb.group({
      details : this.fb.array([])
    });
  }

  get details(){
    return this.mineform.get('details') as FormArray;
  }
  
  getSchemes(k:number){
    return this.details.get(`${k}`)?.get('schemes') as FormArray;
  }

  getQuants(k:number,i:number){
    return this.getSchemes(k).get(`${i}`)?.get('quantities') as FormArray;
  }

  setForm(){
    let val1=this.mineform.get('details') as FormArray;
    let count=1;
    for(let k=0;k<4;k++){
      val1.push(this.fb.group({
        schemes : this.fb.array([])
      }))
      for(let i=0;i<5;i++){
        let val2 = val1.get(`${k}`)?.get('schemes') as FormArray;
        val2.push(this.fb.group({
          year : [count],
          quantities : this.fb.array([])
        }))
        for(let j=0;j<2;j++){
          let val3 = val2.get(`${i}`)?.get('quantities') as FormArray;
          val3.push(this.fb.group({
            quantity : 0
          }))
        }
        count++;
      }
    }
    console.log(this.mineform.controls['details']);
  }
}
