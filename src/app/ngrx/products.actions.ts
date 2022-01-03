import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export enum ProductsActionsTypes{
  /* Get All Products */
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

  /* Get Selected products */
  GET_SELECTED_PRODUCTS="[Products] Get Selected All products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected All products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected All products Error",

  /* Search products */
  SEARCH_PRODUCTS="[Products] Search products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

  /* Select product */
  SELECT_PRODUCT="[Products] Select products",
  SELECT_PRODUCT_SUCCESS="[Products] Select products Success",
  SELECT_PRODUCT_ERROR="[Products] Select products Error",

  /* Delete product */
  DELETE_PRODUCT="[Products] Delete products",
  DELETE_PRODUCT_SUCCESS="[Products] Delete products Success",
  DELETE_PRODUCT_ERROR="[Products] Delete products Error",

  /* New product */
  New_PRODUCT="[Products] New products",
  NEW_PRODUCT_SUCCESS="[Products] New products Success",
  NEW_PRODUCT_ERROR="[Products] New products Error",

  /* Save product */
  Save_PRODUCT="[Products] Save products",
  Save_PRODUCT_SUCCESS="[Products] Save products Success",
  Save_PRODUCT_ERROR="[Products] Save products Error",

  /* Edit product */
  Edit_PRODUCT="[Products] Edit products",
  Edit_PRODUCT_SUCCESS="[Products] Edit products Success",
  Edit_PRODUCT_ERROR="[Products] Edit products Error",

  /* Update product */
  Update_PRODUCT="[Products] Update products",
  Update_PRODUCT_SUCCESS="[Products] Update products Success",
  Update_PRODUCT_ERROR="[Products] Update products Error",
}

//On créer les actions
export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public parametre: any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public parametre: Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}


/* Get Selected Products Actions */
export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public parametre: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public parametre: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}


/* Search Products Actions */
export class SearchProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public parametre: string) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public parametre: Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}


/* Select Products Actions */
export class SelectProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public parametre: Product) {
  }
}

export class SelectProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public parametre: Product) {
  }
}

export class SelectProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}

/* Delete Products Actions */
export class DeleteProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public parametre: Product) {
  }
}

export class DeleteProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public parametre: Product) {
  }
}

export class DeleteProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}


/* New Products Actions */
export class NewProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.New_PRODUCT;
  constructor(public parametre: any) {
  }
}

export class NewProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public parametre: any) {
  }
}

export class NewProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public parametre: String) {  //param: message d'erreur
  }
}


/* Save Products Actions */
export class SaveProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Save_PRODUCT;
  constructor(public parametre: any) {
  }
}

export class SaveProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Save_PRODUCT_SUCCESS;
  constructor(public parametre: Product) {
  }
}

export class SaveProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Save_PRODUCT_ERROR;
  constructor(public parametre: Product) {  //param: message d'erreur
  }
}

/* Edit Product Actions */
export class EditProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Edit_PRODUCT;
  constructor(public parametre: number) {    //number = id du product
  }
}

export class EditProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Edit_PRODUCT_SUCCESS;
  constructor(public parametre: Product) {
  }
}

export class EditProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Edit_PRODUCT_ERROR;
  constructor(public parametre: string) {  //param: message d'erreur
  }
}

/* Update Product Actions */
export class UpdateProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Update_PRODUCT;
  constructor(public parametre: Product) {
  }
}

export class UpdateProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Update_PRODUCT_SUCCESS;
  constructor(public parametre: Product) {
  }
}

export class UpdateProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.Update_PRODUCT_ERROR;
  constructor(public parametre: string) {  //param: message d'erreur
  }
}


//on fait ca pour bénéficier en cas de déclaration du Action
export type ProductsActions=
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
  | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
  | DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
  | NewProductAction | NewProductActionSuccess | NewProductActionError
  | SaveProductAction | SaveProductActionSuccess | SaveProductActionError
  | EditProductAction | EditProductActionSuccess | EditProductActionError
  | UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError
;
