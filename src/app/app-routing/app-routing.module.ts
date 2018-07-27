import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { StockManageComponent } from '../stock/stock-manage/stock-manage.component';
import { HomeComponent } from '../home/home.component';
import { Code404Component } from '../code404/code404.component';
import { StockFormComponent } from '../stock/stock-form/stock-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stock', component: StockManageComponent },
  { path: 'stock/:id', component: StockFormComponent },
  { path: '**', component: Code404Component}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
