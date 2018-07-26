import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Stock } from "../stock/stock.component";
import { Injectable } from "@angular/core";

@Injectable()
export class StockResolveGuard implements Resolve<Stock> {
    constructor(private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.params['id'];
        if(id == 1) {
            console.log(id);
            return new Stock(1, 'IBM');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }
}