import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductsAction, GetSelectedProductsAction, ProductsActionsTypes, SearchProductsAction} from '../../../ngrx/products.actions';
import {Router} from '@angular/router';
import {ProductsState} from '../../../ngrx/products.reducer';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  state:ProductsState | null=null; // (pour Design)
  readonly ProductsActionsTypes= ProductsActionsTypes;  // (pour Design)
  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    //Recupérer state (pour Design)
    this.store.subscribe(state=>{
      this.state=state.catalogState;
    });
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword));
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }
}
