import { Destiny } from './../models/destiny.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  showPopUp: boolean = false;
  newDestino: Destiny[] = [];

  @Output() newDestEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
   
  }

  
  onButtonClick(){
    this.showPopUp = true
  }

  receiveMessage($event:any){
    this.showPopUp = false
  this.newDestino.push($event) 

  } 
}
