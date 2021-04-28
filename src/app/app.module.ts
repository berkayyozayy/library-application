import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';

import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
