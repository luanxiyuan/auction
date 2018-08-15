import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating: number = 0;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();
  
  @Input()
  readonly: boolean = true;
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

  //只要@Input属性发生改变，都会触发该方法
  ngOnChanges(changes: SimpleChanges) {
    console.log('star rating changes');
    //需要初始化，否则调用push方法会报错
    this.stars = [];
    //star为true时显示实心星星，false时显示空心星星
    for (let i=1; i<=5; i++) {
      this.stars.push(this.rating >= i);
    }
  }

  clickStar(index: number) {
    if(!this.readonly) {
      this.rating = index+1;

      //将rating的值更新到父组件（新增、修改页面中）
      this.ratingChange.emit(this.rating);
    }
  }

}
