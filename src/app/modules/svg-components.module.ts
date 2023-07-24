import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoWhiteComponent } from
	'../../assets/svgs/logo-white/logo-white.component';

import { SearchLogoComponent } from
	'../../assets/svgs/search-icon/search-icon.component';

import { UserIconComponent } from
	'../../assets/svgs/user-icon/user-icon.component';

import { BellIconComponent } from
	'src/assets/svgs/bell-icon/bell-icon.component';

import { MoneyIconComponent } from
	'src/assets/svgs/money-icon/money-icon-component';

@NgModule({
	declarations: [
		LogoWhiteComponent,
		SearchLogoComponent,
		UserIconComponent,
		BellIconComponent,
		MoneyIconComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		LogoWhiteComponent,
		SearchLogoComponent,
		UserIconComponent,
		BellIconComponent,
		MoneyIconComponent
	]
})
export class SvgComponentsModule { }
