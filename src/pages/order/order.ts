import { Component,forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../home/home.services';
import {Router} from '@angular/router';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
  providers:[forwardRef(() => HomeService)]
})
export class OrderPage {
  ItemName:any;
  ItemId:any;
  myOrders:any;
  userID:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public homeService:HomeService,private router:Router) {
    this.ItemName=localStorage.getItem("ItemName");
    this.ItemId=localStorage.getItem("ItemId");
    this.userID=localStorage.getItem("userID");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.homeService.getUserOrders(this.userID).subscribe(res => {
      console.log(res);
      this.myOrders = res.orders;
    });
  }


}
