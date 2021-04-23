import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookListItemComponent } from "./book-list-item/book-list-item.component";
import { BookDetailsComponent } from "./book-details/book-details.component";

import { BookStoreService } from "./shared/book-store.service";
import { HomeComponent } from './home/home.component';
import{AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { BookFormComponent } from './book-form/book-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    BookFormComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [BookStoreService]
})
export class AppModule {}