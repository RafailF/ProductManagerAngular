import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReferenceService} from "../reference.service";
import {Reference} from "../reference";

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.css']
})
export class ReferenceDetailComponent {

  referenceSelected: Reference = {};

  constructor(private route: ActivatedRoute, private referenceService: ReferenceService) {

  }

  ngOnInit() {
    this.referenceService.referenceElementSelectedEvent.subscribe((referenceSelected : Reference) =>{
      console.log(referenceSelected);
      this.referenceSelected = referenceSelected;
    });

    this.referenceService.referenceDeleteEvent.subscribe((data:boolean) => {
      if(data)
        this.referenceSelected = {};
    });
  }
}
