import { CountryListService } from './country-list.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
 public countryList: Country[];
 public itemNumber: any;
  constructor(private CountryListService: CountryListService) { }

  ngOnInit(): void {
    this.countryList = []
    this.getAllCountries()
  }


   getAllCountries(): void{
    this.CountryListService.getAllCountries().subscribe((res: any)=>{
      console.log(res)
      debugger
      for(let i = 0 ; i < res.length; i++){
       
        this.countryList.push(res[i])
        this.countryList[i].name = res[i].name.common
        this.countryList[i].flags = res[i].flags.png
      }
    
    })
  }


}
