import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
@Component({
  selector: 'ns-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  moduleId: module.id,
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
