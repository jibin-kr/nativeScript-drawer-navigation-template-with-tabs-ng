import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { isAndroid } from 'tns-core-modules/ui/page/page';
import * as app from "tns-core-modules/application";
@Component({
  selector: 'ns-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  moduleId: module.id,
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
}

}
