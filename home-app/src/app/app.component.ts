import { Component,inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HousingServiceService } from './housing-service.service';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
  <header class="brand-name">
    <img alt="logo" src="/assets/logo.svg" aria-hidden="true" class="brand-logo">
  </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>`,
  styleUrls: ['./app.component.css'],
  imports :[HomeComponent,RouterModule]
})
export class AppComponent {
}
