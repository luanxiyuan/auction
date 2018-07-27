import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private pageTitle: string;
  private pageDesc: string;

  constructor(private router: Router) {
    router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      if(event.url == '/home') {
        this.pageTitle = '首页';
        this.pageDesc = '';
      } else if(event.url.startsWith('/stock')) {
        this.pageTitle = '股票管理';
        this.pageDesc = '股票基本信息的增删改查'
      }
    })
  }

  ngOnInit() {
  }

}
