import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({providedIn:"root"})
export class ProductsService{
  constructor(private http: HttpClient) {
  }

  getAllProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailableProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }


  onSearchProduct(keyword:string):Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }

  select(product:Product):Observable<Product> {
    let host = environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,{...product,selected:!product.selected});
  }

  public delete(id:number):Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host+"/products/"+id);
  }

  save(product:Product):Observable<Product> {
    let host = environment.host;
    return this.http.post<Product>(host+"/products",product);
  }

  getProducts(id:number):Observable<Product> {
    let host = environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }

  updateProducts(product:Product):Observable<Product> {
    let host = environment.host;
    return this.http.put<Product>(host+"/products/"+product.id, product);
  }

}
