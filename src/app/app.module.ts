import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { AccountComponent } from './components/account/account.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
import { AdditemComponent } from './components/additem/additem.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
    CardComponent,
    AccountComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    NotfoundComponent,
    NavbarComponent,
    AdditemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBax8iZC4-6B0-HAoVLVIq27AM-R8alQ-s",
      authDomain: "burger-bd297.firebaseapp.com",
      databaseURL: "https://burger-bd297.firebaseio.com",
      projectId: "burger-bd297",
      storageBucket: "burger-bd297.appspot.com",
      messagingSenderId: "57416245100",
      appId: "1:57416245100:web:0169470caac78b641edd49",
      measurementId: "G-R88RC20917"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
