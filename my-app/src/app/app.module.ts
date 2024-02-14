import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChangetextDirective } from './changetext.directive';
import { SqrtPipe } from './app.sqrt';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingComponent } from "./app-routing.module"
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangetextDirective,
    HomeComponent,
    ContactusComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
