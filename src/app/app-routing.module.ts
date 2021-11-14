import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsComponent } from './incidents/incidents.component';
import { EditComponent } from './incidents/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

//Webpage navigation
const routes: Routes = [
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "incident",
    component: IncidentsComponent
  },
  {
    path: "incident/add/:_id",
    component: EditComponent
  },
  {
    path: "incident/edit/:_id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
