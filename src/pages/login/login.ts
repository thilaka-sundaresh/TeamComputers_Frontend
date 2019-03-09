import { Component, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../home/home.services';
import { Router } from '@angular/router';
import { OrderPage } from '../order/order';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [forwardRef(() => HomeService)]
})
export class LoginPage {

    userName: any;
    erroFlag: boolean;
    errorMsg: any;

    constructor(public navCtrl: NavController, public homeService: HomeService, private router: Router) {
        this.erroFlag = false;
    }

    login(name: any) {
        console.log(name);
        localStorage.setItem("userName", name);
        this.homeService.login(name).subscribe(res => {
            console.log(res);
            if (res.status == "success") {
                localStorage.setItem("userID", res.Id)
                this.navCtrl.push(HomePage);
            } else {
                this.erroFlag = true;
                this.errorMsg = res.status;
            }
        })

    }
}