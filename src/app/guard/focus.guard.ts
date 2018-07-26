import { CanDeactivate } from "@angular/router";
import { StockComponent } from "../stock/stock.component";

export class FocusGuard implements CanDeactivate<StockComponent> {
    canDeactivate(component: StockComponent) {
        if(component.isFocus()) {
            return true; 
        } else {
            return window.confirm("这个股票很好，确认不关注就离开吗？");
        }
    }
}