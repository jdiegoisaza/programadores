import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponents/home/home.component';
import { NavbarComponent } from './homeComponents/home/navbar/navbar.component';
import { ContentComponent } from './homeComponents/home/content/content.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

