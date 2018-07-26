import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId: string;

  private focus: boolean = false;

  private stock: Stock;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //由于ngOnInit方法在同页面跳转时候，只会被执行一次，这时snapshot里面的路由参数id不会被改变，但该方法更快速
    // this.stockId = this.activatedRoute.snapshot.params['id'];
    //如果确定存在通页面跳转的情况，为了保证路由参数id的值会随着改变，需要对订阅activatedRoute的params对象
    this.activatedRoute.params.subscribe((params: Params) => {
      this.stockId = params['id'];
    });

    this.activatedRoute.data.subscribe((data: {stock: Stock}) => {
      console.log(data.stock);
      this.stock = data.stock;
    });

    // this.stockId = this.activatedRoute.snapshot.queryParams['id'];
    // this.stockId = this.activatedRoute.snapshot.data[0]['id'];
  }

  isFocus() {
    return this.focus;
  }

}
export class Stock {
  constructor(private id: number, private name: string) {}
}
