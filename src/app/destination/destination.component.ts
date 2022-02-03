import { DestinationService } from './destination.service';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from '../models/country.model';
import { Destiny } from '../models/destiny.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  @Input() destinationPop: boolean
  public listado: Country[]
  public destino: Destiny[]
  public selCountry: string;
  public id: number = 0;
  public dateG: Date;
  public dateR: Date;
  public city: string;
  public apellido: string;
  @Output() messageEvent = new EventEmitter<any>()

  constructor(private DestinationService: DestinationService) { }

  ngOnInit(): void {
    this.listado = []
this.getAllCountries()
  }
  getAllCountries(): void{
    this.DestinationService.getAllCountries().subscribe((res: any)=>{
  
      for(let i = 0 ; i < res.length; i++){
      
        this.listado.push(res[i])
     
        
    
        this.listado[i].name = res[i].name.common.toUpperCase()
        this.listado[i].id = i
      }
    
    })
  }

  saveAction(x:any){
  
    this.destino = []
    this.id = this.id + 1
    const travelTo = {
      id: this.id,
      selCountry: this.selCountry,
      dateG: this.dateG,
      dateR: this.dateR,
      nombre: this.city,
      apellido: this.apellido

    }
    this.destino.push(travelTo)
    this.messageEvent.emit(travelTo)
  }
}
