import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from "@angular/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeService } from '../pages/home/home.services';
import {OrderPage } from '../pages/order/order';
import {LoginPage } from '../pages/login/login';

import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'orderScreen', component: OrderPage },
  { path: 'homeScreen', component: HomePage }

];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
