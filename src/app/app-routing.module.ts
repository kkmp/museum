import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";
import { AboutMuseumComponent } from './about-museum/about-museum.component';
import { AllExhibitionsComponent } from './all-exhibitions/all-exhibitions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'about', component: AboutMuseumComponent},
  { path: 'all-exhibitions', component: AllExhibitionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
