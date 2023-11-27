import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import { FaqPageComponent } from './faq-page/faq-page.component';
import { AboutMuseumComponent } from './about-museum/about-museum.component';
import { AllExhibitionsComponent } from './all-exhibitions/all-exhibitions.component';
import { ExhibitionTileComponent } from './all-exhibitions/exhibition-tile/exhibition-tile.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceTileComponent } from './price-list/price-tile/price-tile.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { ExhibitionOneCenterComponent } from './exhibition-one-center/exhibition-one-center.component';
import { MulitiediaComponent } from './mulitiedia/mulitiedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactPageComponent,
    FaqPageComponent,
    AboutMuseumComponent,
    AllExhibitionsComponent,
    ExhibitionTileComponent,
    PriceListComponent,
    PriceTileComponent,
    ExhibitionComponent,
    ExhibitionOneCenterComponent,
    MulitiediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
