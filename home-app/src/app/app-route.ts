import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeconfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Details Page",
  },
  {
    path: "New Path",
    component: DetailsComponent,
  },
];

export default routeconfig;
