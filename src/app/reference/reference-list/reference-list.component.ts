import { Component } from '@angular/core';
import {Reference} from "../reference";
import {ReferenceService} from "../reference.service";


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.css']
})
export class ReferenceListComponent {
  referenceSelected: Reference = {};
  references: Reference[] = [];
  referencesInMemory: Reference[] = [];

  constructor(private referenceService: ReferenceService) {
  }


  ngOnInit() {
    console.log(this.referencesInMemory);
    if(this.referencesInMemory.length > 0){
      this.references = this.referencesInMemory;
    }
    this.referenceService.getReferences().subscribe((referencesData : Reference[]) => {
      this.references = referencesData
    })

    this.referenceService.referenceDataListEvent.subscribe(data => {
      this.referencesInMemory = data;
      this.references = this.referencesInMemory;
    })
  }


  selectElement(reference: Reference){
    this.referenceSelected = reference;
    this.referenceService.referenceElementSelectedEvent.emit(this.referenceSelected);
  }

  updateReference(reference: Reference){
    this.referenceService.referenceUpdateEvent.emit(reference);
  }

  deleteReference(reference: Reference){
    if(reference && reference.id)
      this.referenceService.deleteReference(reference.id)
        .subscribe(() => {
          this.referenceService.getReferences().subscribe((referencesData : Reference[]) => {
            this.references = referencesData;
            this.referenceService.referenceDeleteEvent.emit(true);
          })
        })

  }
}
