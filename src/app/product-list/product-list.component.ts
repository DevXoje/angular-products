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
	}

	ngOnInit() {
		this.productsService.getProducts().subscribe(
			res => this.products = res,
			err => console.log(err),
			() => console.log('Products loaded')
		);
	}
	toggleImage(): void {
		this.showImage = !this.showImage;
	}
	

}
