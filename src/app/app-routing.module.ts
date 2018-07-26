import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { StockResolveGuard } from './guard/stock.resolve.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consult', component: ConsultComponent, outlet: 'aux'},
  {path: 'stock/:id', component: StockComponent,
    children: [
      {path: '', component: BuyerListComponent},
      {path: 'seller/:id', component: SellerListComponent}
    ], 
    canActivate: [PermissionGuard],
    canDeactivate: [FocusGuard],
    resolve: {
      stock: StockResolveGuard
    }
  },
  // {path: 'stock', component: StockComponent},
  // {path: 'stock', component: StockComponent, data: [{id:3}]},
  {path: '**', component: Code404Component}   //通配符配置，当没有匹配的url时候制定跳转的组件
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
