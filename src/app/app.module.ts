import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { MovieListComponent } from './movie-list/movie-list.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import { MovieBlockComponent } from './movie-list/movie-block/movie-block.component';
import { YearListComponent } from './movie-list/year-list/year-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieBlockComponent,
    YearListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
