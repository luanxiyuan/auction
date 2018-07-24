import { Component } from '@angular/core';
/**
 * 组件元数据装饰器
 * {}里面的属性，叫做元数据
 * 装饰器、模板、控制器是组件必备的元素
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**控制器：一个被@Component装饰器装饰的typescript类 */
export class AppComponent {
  title = 'app helloworld';
}
