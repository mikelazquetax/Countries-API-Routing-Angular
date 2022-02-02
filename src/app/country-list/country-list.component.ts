import { CountryListService } from './country-list.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
 public countryList: Country[];
 public secCountryList: Country[];
 public itemNumber: any;
 public countryName: string
  constructor(private CountryListService: CountryListService) { }

  ngOnInit(): void {
    this.countryList = []
    this.secCountryList = []
    this.getAllCountries()
    console.log('inicializando')
  }


   getAllCountries(): void{
    this.CountryListService.getAllCountries().subscribe((res: any)=>{
  
      for(let i = 0 ; i < res.length; i++){
       
        this.countryList.push(res[i])
        this.secCountryList.push(res[i])
        
      
        this.countryList[i].name = res[i].name.common.toUpperCase()
        this.countryList[i].flags = res[i].flags.png
        this.countryList[i].id = i
      }
    
    })
  }

  onKeyUp(x:any){
    this.countryList = this.secCountryList

  
    let valorCampo:string = x.target.value.toUpperCase()

    
    const countryFiltrado = this.countryList.filter((item)=>{
    return  item.name.includes(valorCampo)
    }) 
    console.log(countryFiltrado)
    this.countryList = countryFiltrado
  }


}
