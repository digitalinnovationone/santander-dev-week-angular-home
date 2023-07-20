import { Component } from '@angular/core';

@Component({
	selector: 'app-carousel-items',
	templateUrl: './carousel-items.component.html',
	styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent {
	visibleItems: { text: string; icon: string }[] = [];
	items = [
		{ text: 'Home', icon: 'Icon 1' },
		{ text: 'Conta Corrente', icon: 'Icon 2' },
		{ text: 'Transferências', icon: 'Icon 3' },
		{ text: 'Pagamentos', icon: 'Icon 4' },
		{ text: 'Cartões', icon: 'Icon 5' },
		{ text: 'Empréstimos', icon: 'Icon 6' },
		{ text: 'Outros', icon: 'Icon 7' }
	];
	activeIndex = 0;


	ngOnInit() {
		this.updateVisibleItems();
	}

	updateVisibleItems() {
		this.visibleItems = this.items.slice(this.activeIndex, this.activeIndex + 3);
	}

	moveLeft() {
		if (this.activeIndex > 0) {
			this.activeIndex--;
			this.updateVisibleItems();
		}
	}

	moveRight() {
		if (this.activeIndex < this.items.length - 3) {
			this.activeIndex++;
			this.updateVisibleItems();
		}
	}
}
