import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		ProductFilterPipe,
		ProductItemComponent,
		StarRatingComponent
	],
	imports: [
		BrowserModule, FormsModule, HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
