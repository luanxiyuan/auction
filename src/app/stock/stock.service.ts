import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks: Array<Stock> = [
    new Stock(1, '一股票', 1.1, 10.11, '这是第一只股票', ['IT', '互联网']),
    new Stock(2, '二股票', 2.2, 2011, '这是第二只股票', ['IT', '金融']),
    new Stock(3, '三股票', 3.3, 30.1, '这是第三只股票', ['IT', '互联网']),
    new Stock(4, '四股票', 4.4, 40.2, '这是第四只股票', ['金融', '互联网']),
    new Stock(5, '五股票', 3.5, 50.4, '这是第五只股票', ['IT', '互联网', '金融']),
    new Stock(6, '六股票', 2.6, 60.5, '这是第六只股票', ['IT', '金融']),
    new Stock(7, '七股票', 1.7, 70.6, '这是第七只股票', ['金融', '互联网']),
    new Stock(8, '八股票', 0.8, 80.7, '这是第八只股票', ['IT', '金融'])
  ];

  constructor() { }

  getStocks(): Array<Stock> {
    return this.stocks;
  }

  getStockById(id: number) {
    let stock: Stock = this.stocks.find(stock => stock.id == id);
    if(!stock) {
      stock =  new Stock(0, '', 0, 0, '', []);
    } 
    return stock;
  }

}
export class Stock {
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public price: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}