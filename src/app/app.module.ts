import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';

@NgModule({
  declarations: [   
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarComponent,
    StockManageComponent,
    StarsComponent,
    MenuComponent,
    HomeComponent,
    Code404Component,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
