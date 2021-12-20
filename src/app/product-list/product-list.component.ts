import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	products: IProduct[] = [];
	title = 'Mi   lista  de  productos';
	headers = {
		description: 'Producto',
		price: 'Precio',
		available: 'Disponible',
		rating: 'Puntuación'
	};
	showImage: boolean = true;
	filterSearch = "";

	constructor(private productsService: ProductsService) {
		this.products = this.productsService.getProducts();
	}

	ngOnInit() { console.log("ProductListComponent   has  been  initialized!"); }
	toggleImage(): void {
		this.showImage = !this.showImage;
	}

}
