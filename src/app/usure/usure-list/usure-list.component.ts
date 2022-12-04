import {Component, OnInit} from '@angular/core';
import {UsureService} from "../usure.service";
import {Usure} from "../usure";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-usure-list',
  templateUrl: './usure-list.component.html',
  styleUrls: ['./usure-list.component.css']
})
export class UsureListComponent implements OnInit {

  usureSelected: Usure = {};
  usures: Usure[] = [];
  usuresInMemory: Usure[] = [];

  constructor(private usureService: UsureService) {
  }


  ngOnInit() {
    console.log(this.usuresInMemory);
    if(this.usuresInMemory.length > 0){
      this.usures = this.usuresInMemory;
    }
    this.usureService.getUsures().subscribe((usuresData : Usure[]) => {
      this.usures = usuresData
    })

    this.usureService.usureDataListEvent.subscribe(data => {
      this.usuresInMemory = data;
      this.usures = this.usuresInMemory;
    })
  }


  selectElement(usure: Usure){
    this.usureSelected = usure;
    this.usureService.usureElementSelectedEvent.emit(this.usureSelected);
  }

  updateUsure(usure: Usure){
      this.usureService.usureUpdateEvent.emit(usure);
  }

  deleteUsure(usure: Usure){
    if(usure && usure.id)
      this.usureService.deleteUsure(usure.id)
        .subscribe(() => {
          this.usureService.getUsures().subscribe((usuresData : Usure[]) => {
            this.usures = usuresData;
            this.usureService.usureDeleteEvent.emit(true);
          })
        })

  }

}
