import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products: IProduct[] = [];
	constructor() {
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
	getProducts() {
		return this.products;
	}
}
