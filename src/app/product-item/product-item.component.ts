import { IProduct } from '../interfaces/i-product';
import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
	@Input() product: IProduct = { available: new Date(), description: '', id: 0, price: 0, rating: 0, imageUrl: '' };
	@Input() showImage: boolean = true;

	constructor() { }
	ngOnInit() { }
	changeRating(rating: number): void {
		this.product.rating = rating;
	}
}
