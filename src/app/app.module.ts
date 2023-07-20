import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoWhiteComponent } from '../assets/svgs/logo-white/logo-white.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { HeaderComponent } from './components/header/header.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { SearchLogoComponent } from '../assets/svgs/search-logo/search-logo.component';
import { UserIconComponent } from '../assets/svgs/user-icon/user-icon.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LogoWhiteComponent,
		CardBoxComponent,
		HeaderComponent,
		AmountBoxComponent,
		CarouselItemsComponent,
		SearchLogoComponent,
		UserIconComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
