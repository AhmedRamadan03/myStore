import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { combineLatest } from 'rxjs';
import { AccountComponent } from './components/account/account.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdditemComponent } from './components/additem/additem.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  {path :''         , component : HomeComponent , data:{index:0}},
  {path : 'login'   , component : LoginComponent,data:{index:2}},
  {path : 'signup'  , component : SignupComponent ,data:{index:4}},
  {path : 'admin'    , component : MenuComponent, data:{index:3}}, 
  {path : 'contact' , component : ContactComponent, data:{index:5}},
  {path : 'card'    , component : CardComponent , canActivate:[AuthGuard],data:{index:1}},
  {path : 'about'   , component : AboutComponent, data:{index:7}},
  {path : 'acount'  , component : AccountComponent},
  {path : 'additem' , component : AdditemComponent, data:{index:6}},
  {path : '**'      , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
