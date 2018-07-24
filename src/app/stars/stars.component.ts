import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating: number = 0;
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    //需要初始化，否则调用push方法会报错
    this.stars = [];
    //star为true时显示实心星星，false时显示空心星星
    for (let i=1; i<=5; i++) {
      this.stars.push(this.rating > i);
    }
  }

}
