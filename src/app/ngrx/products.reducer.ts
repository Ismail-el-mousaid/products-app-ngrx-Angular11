import {Product} from '../model/product.model';
import {ProductsActions, ProductsActionsTypes} from './products.actions';


export enum ProductsStateEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="NEW",
  EDIT="EDIT",
  UPDATED="UPDATED"
}
/* Création du State */
export interface ProductsState{
  products:Product[],   //variable qui stocke la liste des produits
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct:Product | null,
  currentAction: ProductsActions | null  //Pour coulorier la btn en cours (All ou Selected..)
}

/* Création du Reducer */
export function productsReducer(state:ProductsState=initState, action: ProductsActions): ProductsState{
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.parametre, currentAction: action}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

      /* Get Selected Products */
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.parametre, currentAction: action}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

    /* Search Products */
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.parametre, currentAction: action}
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

    /* Select Product */
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product:Product= action.parametre;
      let listProducts=[...state.products];
      let data:Product[] = listProducts.map(p=>p.id==product.id?product:p);
      return {...state, dataState: ProductsStateEnum.LOADED, products: data, currentAction: action}
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

    /* Delete Product */
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      let p:Product= action.parametre;  //Get Product qui va etre supprimer
      let index=state.products.indexOf(p);
      let productsList=[...state.products];
      productsList.splice(index,1)  //Supprimer product à partir du liste
      return {...state, dataState: ProductsStateEnum.LOADED, products: productsList, currentAction: action}
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}


    /* New Product */
    case ProductsActionsTypes.New_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: action}
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

    /* Save Product */
    case ProductsActionsTypes.Save_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.Save_PRODUCT_SUCCESS:
      let prods:Product[]=[...state.products];
      prods.push(action.parametre);
      return {...state, dataState: ProductsStateEnum.NEW, products:prods, currentAction: action}
    case ProductsActionsTypes.Save_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}

    /* Edit Product */
    case ProductsActionsTypes.Edit_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribit dataState
    case ProductsActionsTypes.Edit_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: action.parametre, currentAction: action}
    case ProductsActionsTypes.Edit_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}


    /* Update Product */
    case ProductsActionsTypes.Update_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: action}  //il va clonner state initial et lui modifier attribut dataState
    case ProductsActionsTypes.Update_PRODUCT_SUCCESS:
      let updatedProduct:Product=action.parametre;
      let listeProducts=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p); //remplacer Product par son update
      return {...state, dataState: ProductsStateEnum.UPDATED, products: listeProducts, currentAction: action}
    case ProductsActionsTypes.Update_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.parametre, currentAction: action}



    default : return {...state}
  }
}

//Initialiser State
const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
}



