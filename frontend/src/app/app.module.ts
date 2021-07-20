import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  FirstPageComponent,
  SecondPageComponent,
  ThirdPageComponent,
  SearchPageComponent
} from '../pages/pages.component';
import { ApiService } from 'src/services/api.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * The app routes
 */
const APP_ROUTES: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'third', component: ThirdPageComponent },
  { path: 'search', component: SearchPageComponent }
]
/**
 * The modules for angular material
 */
const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
]
@NgModule({
  exports: [MATERIAL_MODULES],
  imports: [MATERIAL_MODULES]
})
export class MaterialModule { }

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    SearchPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF,
    useValue: '/'}, ApiService]
})
export class AppModule { }

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */