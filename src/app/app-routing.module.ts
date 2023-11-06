import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'faq', component: FaqPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
