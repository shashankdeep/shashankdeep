import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSortModule } from "@angular/material/sort";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MatautocompleteComponent } from './AngularMaterial/matautocomplete/matautocomplete.component';
import { BadgeComponent } from './AngularMaterial/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    MatautocompleteComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
      MatToolbarModule,
      MatMenuModule,
      MatCheckboxModule,
      MatButtonModule, 
      MatCardModule,
      MatInputModule,
      MatPaginatorModule,
      MatSortModule,
      MatSlideToggleModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatDividerModule,
      MatTableModule,
      MatMenuModule,
      MatSnackBarModule,
      MatSidenavModule,
      MatIconModule,MatTabsModule,
      MatStepperModule 
      ,MatProgressBarModule ,
      MatListModule,
      MatProgressBarModule,
      MatRadioModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatSelectModule,
      AppRoutingModule,
      MatSidenavModule,
      BrowserAnimationsModule,
      MatPaginatorModule,
      MatAutocompleteModule,
      FormsModule,
      MatTabsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatButtonModule, 
      MatCardModule,
      MatSortModule,
      MatInputModule,
      MatDialogModule,
      MatDividerModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatStepperModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);