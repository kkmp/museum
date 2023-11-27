import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";
import {AboutMuseumComponent} from './about-museum/about-museum.component';
import {AllExhibitionsComponent} from './all-exhibitions/all-exhibitions.component';
import {PriceListComponent} from './price-list/price-list.component';
import {ExhibitionComponent} from "./exhibition/exhibition.component";
import {ExhibitionOneCenterComponent} from "./exhibition-one-center/exhibition-one-center.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'faq', component: FaqPageComponent},
  {path: 'about', component: AboutMuseumComponent},
  {path: 'all-exhibitions', component: AllExhibitionsComponent},
  {path: 'price-list', component: PriceListComponent},
  {path: "all-exhibitions/2021", component: ExhibitionComponent},
  {path: "all-exhibitions/2023", component: ExhibitionOneCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
