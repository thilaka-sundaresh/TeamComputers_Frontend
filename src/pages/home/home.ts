import { Component, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from './home.services';
import { Router } from '@angular/router';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [forwardRef(() => HomeService)]
})
export class HomePage {
  inventories: any;
  inventory: any;
  confirmOrderFlag: boolean;
  myOrderFlag: boolean;
  myOrders: any;
  orderStatusFlag: boolean;
  orderStatusMsg: any;
  userID: any;
  userName: any;
  leftQuantity:any;

  constructor(public navCtrl: NavController, public homeService: HomeService, private router: Router) {
    this.confirmOrderFlag = false;
    this.myOrderFlag = false;
    this.orderStatusFlag = false;
    this.userName = localStorage.getItem("userName");
    // localStorage.setItem("userID","5c837cc9ed3d11e809887ca2")
    this.userID=localStorage.getItem("userID");

    this.homeService.getAllInventories().subscribe(res => {
      console.log(res);
      this.inventories = res.inventories;
    },
      err => {
        console.log(err);
      });
  }

  gotoOrder(inventory: any) {
    console.log("going to order screen");
    this.inventory = inventory;
    this.leftQuantity=inventory.numberOfPiecesLeft;
    localStorage.setItem("ItemId", inventory._id);
    localStorage.setItem("ItemName", inventory.inventoryName);
    this.confirmOrderFlag = !this.confirmOrderFlag;
    //this.router.navigate(['/orderScreen']);
  }


  confirmOrder(Quantity: any) {
    
    this.homeService.createOrder(this.inventory._id, Quantity).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
        this.confirmOrderFlag = !this.confirmOrderFlag;
        this.orderStatusFlag = !this.orderStatusFlag;
        this.orderStatusMsg = res.status;
      } else {
        this.confirmOrderFlag = !this.confirmOrderFlag;
        this.orderStatusFlag = !this.orderStatusFlag;
        this.orderStatusMsg = res.status;
      }


    });
  }

  showMyOrders() {
    // this.myOrderFlag = !this.myOrderFlag;
    // this.homeService.getUserOrders(this.userID).subscribe(res => {
    //   console.log(res);
    //   this.myOrders = res.orders;
    // });
    this.navCtrl.push(OrderPage);
  }

  ok() {
    this.orderStatusFlag = !this.orderStatusFlag;
    //this.navCtrl.push(OrderPage);
  }
}
