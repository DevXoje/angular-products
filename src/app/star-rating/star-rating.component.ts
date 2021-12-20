import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
	@Input() rating: number = 0;
	@Output() ratingChanged = new EventEmitter<number>();
	/* private auxRating: number = 0; */
	auxRating: number = 0;
	constructor() {
	}
	ngOnInit() {
		this.restoreRating();
	}
	restoreRating() {
		this.auxRating = this.rating;
	}
	setRating() {
		this.ratingChanged.emit(this.auxRating);
	}
	


}
