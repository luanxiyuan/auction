import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  constructor(private router: Router, public stockService: StockService) { }

  private stocks: Array<Stock>;

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  add() {
    this.router.navigateByUrl('/stock/0');
  }

  edit(stock: Stock) {
    this.router.navigateByUrl('/stock/'+stock.id);
  }
}