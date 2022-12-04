import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsureComponent } from './usure/usure.component';
import { ReferenceComponent } from './reference/reference.component';
import { ReferenceListComponent } from './reference/reference-list/reference-list.component';
import { ReferenceAddEditComponent } from './reference/reference-add-edit/reference-add-edit.component';
import { UsureListComponent } from './usure/usure-list/usure-list.component';
import { UsureAddEditComponent } from './usure/usure-add-edit/usure-add-edit.component';
import { UsureDetailComponent } from './usure/usure-detail/usure-detail.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import {UsureService} from "./usure/usure.service";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReferenceDetailComponent } from './reference/reference-detail/reference-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsureComponent,
    ReferenceComponent,
    ReferenceListComponent,
    ReferenceAddEditComponent,
    UsureListComponent,
    UsureAddEditComponent,
    UsureDetailComponent,
    NavBarComponent,
    ReferenceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
