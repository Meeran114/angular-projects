import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingServiceService } from '../housing-service.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
  <article>
    <img [src]="housingLocation?.photo" alt="Exterior Photo of {{ housingLocation?.name }}" class="listing-photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">{{ housingLocation?.city }}, {{housingLocation?.state }}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About This Location</h2>
      <ul>
        <li>Units Available : {{housingLocation?.availableUnits}}</li>
        <li *ngIf="housingLocation?.wifi">Wifi Available Here</li>
        <li *ngIf="housingLocation?.laundry">Laundry Available Here</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply Now to Live Here</h2>
      <form [formGroup]="applyform" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName="firstname">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName="lastname">
        <label for="email">Email</label>
        <input type="text" id="email" formControlName="email">
        <button type="submit" class="primary">Apply Now</button>    
      </form>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
housingservice = inject(HousingServiceService);
housingLocation : HousingLocation | undefined ;
applyform = new FormGroup({
  firstname : new FormControl(''),
  lastname : new FormControl(''),
  email : new FormControl('')
});
constructor(private activatedRoute : ActivatedRoute){
const housinglocationid = Number(this.activatedRoute.snapshot.params['id']);
this.housingLocation=this.housingservice.getHousingLocationById(housinglocationid);
}

submitApplication(){
  this.housingservice.submitApplication(this.applyform.value.firstname??"",this.applyform.value.lastname??"",this.applyform.value.email??"");
}
}
