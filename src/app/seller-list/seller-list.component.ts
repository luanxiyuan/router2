import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellerId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.activatedRoute.snapshot.params['id'];
  }

}
