import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailService {

  constructor(private http: HttpClient) { }

  getSpecificCountry(countryName: string){
    return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`)
  }
}
