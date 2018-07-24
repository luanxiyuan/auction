import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  /**组件、指令、管道 声明的地方 */
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  /**声明服务的地方 */
  providers: [],
  /**声明主组件 */
  bootstrap: [AppComponent]
})
export class AppModule { }
