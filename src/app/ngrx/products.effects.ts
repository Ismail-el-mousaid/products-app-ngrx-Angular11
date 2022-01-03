import {Injectable} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  SearchProductsActionSuccess,
  SearchProductsActionError,
  ProductsActionsTypes,
  ProductsActions,
  SelectProductActionSuccess,
  SelectProductActionError,
  DeleteProductActionSuccess,
  DeleteProductActionError,
  NewProductAction,
  NewProductActionSuccess,
  SaveProductActionSuccess,
  SaveProductActionError,
  EditProductActionSuccess, EditProductActionError, UpdateProductActionSuccess, UpdateProductActionError
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  constructor(private productService: ProductsService, private effectActions: Actions) {
  }


  getAllProductsEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getAllProducts()
          .pipe(
            map((products)=> new GetAllProductsActionSuccess(products)),
            catchError((err) => of(new GetAllProductsActionError(err)))
          )
      })
    )
  );

  getSelectedProductsEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((products)=> new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err)))
          )
      })
    )
  );

  /* Search Products Effect */
  searchProductsEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.onSearchProduct(action.parametre)  //Quand on fait search, on lui transfere keyword
          .pipe(
            map((products)=> new SearchProductsActionSuccess(products)),   //Quand on récupère résultat on emmet un nouveau action "SearchActionSuccess"
            catchError((err) => of(new SearchProductsActionError(err)))
          )
      })
    )
  );


  /* Select Product Effect */
  selectProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.select(action.parametre)
          .pipe(
            map((products)=> new SelectProductActionSuccess(products)),   //Quand on récupère résultat on emmet un nouveau action "ActionSuccess"
            catchError((err) => of(new SelectProductActionError(err.message)))
          )
      })
    )
  );


  /* Delete Product Effect */
  deleteProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.delete(action.parametre.id)
          .pipe(
            map(()=> new DeleteProductActionSuccess(action.parametre)),   //Quand on récupère résultat on emmet un nouveau action "ActionSuccess"
            catchError((err) => of(new DeleteProductActionError(err.message)))
          )
      })
    )
  );

  /* New Product Effect */
  newProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.New_PRODUCT),
      map((action:ProductsActions)=>{
        return new NewProductActionSuccess({});

      })
    )
  );

  /* Save Product Effect */
  saveProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.Save_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.save(action.parametre)
          .pipe(
            map((product)=> new SaveProductActionSuccess(product)),   //Quand on récupère résultat on emmet un nouveau action "ActionSuccess"
            catchError((err) => of(new SaveProductActionError(err.message)))
          )
      })
    )
  );

  /* Edit Product Effect */
  editProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.Edit_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getProducts(action.parametre)
          .pipe(
            map((product)=> new EditProductActionSuccess(product)),   //Quand on récupère résultat on emmet un nouveau action "ActionSuccess"
            catchError((err) => of(new EditProductActionError(err.message)))
          )
      })
    )
  );


  /* Update Product Effect */
  updateProductEffect: Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.Update_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.updateProducts(action.parametre)
          .pipe(
            map((product)=> new UpdateProductActionSuccess(product)),   //Quand on récupère résultat on emmet un nouveau action "ActionSuccess"
            catchError((err) => of(new UpdateProductActionError(err.message)))
          )
      })
    )
  );


}
