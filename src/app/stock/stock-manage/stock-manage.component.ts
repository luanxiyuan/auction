import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  
  searchValue: FormControl = new FormControl();
  stockName: string = '';

  constructor(private router: Router, public stockService: StockService) { 
    this.searchValue.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      value => {
        console.log(value);
        this.stockName = value
      }
    )
  }

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