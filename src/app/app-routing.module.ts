import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatautocompleteComponent} from './AngularMaterial/matautocomplete/matautocomplete.component';
import { BadgeComponent } from './AngularMaterial/badge/badge.component';

const routes: Routes = [
  { path: 'autocomplete', component: MatautocompleteComponent },
  { path: 'badge', component: BadgeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
