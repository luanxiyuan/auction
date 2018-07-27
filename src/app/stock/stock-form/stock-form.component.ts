import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock-manage/stock-manage.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  private stock: Stock;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.stock = new Stock(1, '一股票', 1.1, 10.11, '这是第一只股票', ['IT', '互联网']);
  }

}
