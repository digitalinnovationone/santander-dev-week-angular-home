import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GetFeaturesService {
	private url = 'https://digitalinnovationone.github.io/santander-dev-week-2023-api/mocks/find_one.json';

	constructor(private http: HttpClient) { }

	getFeatures(description: string): Observable<any> {
		return this.http.get<any>(this.url);
	}
}
