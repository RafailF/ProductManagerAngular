import {Component, OnInit} from '@angular/core';
import {UsureService} from "../usure.service";
import {Usure} from "../usure";

@Component({
  selector: 'app-usure-detail',
  templateUrl: './usure-detail.component.html',
  styleUrls: ['./usure-detail.component.css']
})
export class UsureDetailComponent implements OnInit{
  usureSelected: Usure = {};

  constructor(private usureService: UsureService) {

  }

  ngOnInit() {
    this.usureService.usureElementSelectedEvent.subscribe((usureSelected : Usure) =>{
      console.log(usureSelected);
      this.usureSelected = usureSelected;
    });

    this.usureService.usureDeleteEvent.subscribe((data:boolean) => {
      if(data)
      this.usureSelected = {};
    });
  }

}
