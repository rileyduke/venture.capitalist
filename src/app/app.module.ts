import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessItemComponent } from './business-item/business-item.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';

@NgModule({
   declarations: [
      AppComponent,
      BusinessListComponent,
      BusinessItemComponent,
      NavSidebarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
