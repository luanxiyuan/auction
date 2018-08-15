import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockFormComponent implements OnInit {

  private stock: Stock;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.stock = this.stockService.getStockById(id);
  }
  
  cancel() {
    this.router.navigateByUrl('/stock');
  }
  
  save() {
    this.router.navigateByUrl('/stock');
  }

  setRatingValue(rating: number) {
    this.stock.rating = rating;
  }

}
