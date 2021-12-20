import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from '../interfaces/i-product';
import { OkResponse } from '../interfaces/ok-response';
import { ProductResponse } from '../interfaces/product-response';
import { ResponseProducts } from '../interfaces/response-products';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products: IProduct[] = [];
	private productURL = 'http://arturober.com:5001/products';
	constructor(private http: HttpClient) {
		this.products.push({
			id: 1,
			description: 'SSD  hard   drive',
			available: new Date('2016-10-03'), price: 75,
			imageUrl: '/assets/img/ssd.png',
			rating: 3
		}, {
			id: 2,
			description: 'LGA1151  Motherboard',
			available: new Date('2016-09-15'), price: 96.95,
			imageUrl: '/assets/img/motherboard.jpg',
			rating: 4
		});
	}
	getProducts(): Observable<IProduct[]> {
		return this.http.get<ResponseProducts>(this.productURL).pipe(
			map(response => response.products),
			catchError((resp: HttpErrorResponse) => throwError(`Error obteniendo productos. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`))
		);
		/* return this.http.get<{ products: IProduct[] }>(this.productURL).pipe(
			map(response => response.products)
		); */
	}
	changeRating(idProduct: number, rating: number): Observable<boolean> {
		return this.http.put<OkResponse>(`${this.productURL}/${productId}/rating`{ rating: rating }).pipe(
			catchError((resp: HttpErrorResponse) => throwError(`Error cambiando puntuación!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
			map(resp => resp.rating)
		);
	}
	addProduct(product: IProduct): Observable<IProduct> {
		return this.http.post<ProductResponse>(this.productURL, product).pipe(
			catchError((resp: HttpErrorResponse) => throwError(`Error insertando producto!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
			map(resp => {
				return resp.product;
			})
		);
	}
}
