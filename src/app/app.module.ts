import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './incidents/edit/edit.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

//Declarations for usability
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncidentsComponent,
    EditComponent,
    HomeComponent,
    ContactComponent,
    FaqComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
