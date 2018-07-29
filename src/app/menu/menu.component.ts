import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menus: Array<Menu>;
  private currentMenuId: number;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', '/home', 'glyphicon glyphicon-home'),
      new Menu(2, '股票管理', '/stock', 'glyphicon glyphicon-th-list')
    ];
    //通过location对象获取当前url，用来设置当前的默认选中菜单
    let currentUrl = (this.location.path() == '/' || this.location.path() == '') ? '/home' : this.location.path();
    this.setDefaultMenu(currentUrl);
  }

  navigateTo(menu: Menu) {
    this.currentMenuId = menu.id;
    this.router.navigateByUrl(menu.link);
  }

  /**
   * 设置默认的菜单选中样式，防止进入到某个页面后点击刷新导致菜单不被选中的情况
   */
  setDefaultMenu(link) {
    this.menus.forEach((menu: Menu) => {
      if (menu.link == link) {
        this.navigateTo(menu);
      }
    });
  }

}
export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public iconClass: string
  ) {

  }
}