import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MallaCurricularComponent } from './malla-curricular/malla-curricular.component';

@NgModule({
  declarations: [
    AppComponent,
    MallaCurricularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
