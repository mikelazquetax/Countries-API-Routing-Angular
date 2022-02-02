
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailService } from './country-detail.service';
import { Countrydetail } from '../models/countryDetail.models';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
 public countryName?: string;
 public countryDetail: Countrydetail;

 public position = {
   lat: -34.681,
   lng:  -58.371
 };
 public label = {
   color: 'black',
   weight: 'bold',
   text: 'Capital',
   
 }

  constructor(private route: ActivatedRoute, private CountryDetailService: CountryDetailService ) { }

  ngOnInit(): void {
    this.countryName = ' '
    
    console.log(this.route)
    this.route.paramMap.subscribe(params => {
    
       this.countryName = params.get('country') ?? ''
    })

    this.callApi(this.countryName)
  }

  callApi(country:string){
    this.CountryDetailService.getSpecificCountry(country).subscribe((res:any)=>{
      console.log(res)
      debugger
      
      this.countryDetail = res[0]
      this.position.lat = res[0].capitalInfo.latlng[0]
      this.position.lng = res[0].capitalInfo.latlng[1]
    })
  }

}
