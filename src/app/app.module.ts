import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewAccountComponent } from './add-new-account/add-new-account.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule, Routes } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule} from '@angular/material/toolbar';

import { MatButtonModule} from '@angular/material/button';

import { MatIconModule} from '@angular/material/icon';

import { MatDividerModule} from '@angular/material/divider';

import { MatListModule} from '@angular/material/list';

import { MatTableModule } from '@angular/material/table'  

import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';


import { NgForm } from "@angular/forms";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';


const routes: Routes = [
 
  {path:'addAccount',component: AddNewAccountComponent},
  {path:'displayDetails',component: DisplayComponent},
  {path:'**',component: DisplayComponent},
  {path:'',component: DisplayComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddNewAccountComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatBadgeModule, 
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatPaginatorModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
