import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyDIfhshL6e6M9qVplKami4mtPvHIFecxNw',
    authDomain: 'myportfolio-bf2e1.firebaseapp.com',
    databaseURL: 'https://myportfolio-bf2e1.firebaseio.com',
    storageBucket: 'myportfolio-bf2e1.appspot.com',
    messagingSenderId: '572018906572'
};

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent,
    HomeComponent,
    ContactmeComponent,
    AboutmeComponent,
    ExperienceComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [CollectableService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
