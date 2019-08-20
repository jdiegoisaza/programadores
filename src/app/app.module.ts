import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponents/home/home.component';
import { NavbarComponent } from './homeComponents/home/navbar/navbar.component';
import { ContentComponent } from './homeComponents/home/content/content.component';
import { DataProgramasComponent } from './data-programas/data-programas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'listProgramas', component: DataProgramasComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContentComponent,
    DataProgramasComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

