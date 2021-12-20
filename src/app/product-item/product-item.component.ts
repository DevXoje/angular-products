import { IProduct } from '../interfaces/i-product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
	selector: 'product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
	@Input() product: IProduct = { available: new Date(), description: '', id: 0, price: 0, rating: 0, imageUrl: '' };
	@Input() showImage: boolean = true;

	constructor(private productsService: ProductsService) { }
	ngOnInit() { }
	changeRating(rating: number) {
		this.productsService.changeRating(this.product.id, rating).subscribe(
			ok => this.product.rating = rating,
			error => console.error(error)
		);
	}
}
