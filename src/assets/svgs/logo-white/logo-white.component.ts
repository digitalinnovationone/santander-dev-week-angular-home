import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-logo-white',
	templateUrl: './logo-white.component.html',
	styleUrls: []
})
export class LogoWhiteComponent {
	@Input() logoHeight: string = "114"
	@Input() logoWidth: string = "250"
}
