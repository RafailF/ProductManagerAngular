import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReferenceService} from "../reference.service";
import {Reference} from "../reference";


@Component({
  selector: 'app-reference-add-edit',
  templateUrl: './reference-add-edit.component.html',
  styleUrls: ['./reference-add-edit.component.css']
})
export class ReferenceAddEditComponent {
  referenceForm : FormGroup;
  submitted = false;
  isUpdate = false;

  constructor(private formBuilder: FormBuilder, private referenceService: ReferenceService) {
    this.referenceForm = this.formBuilder.group({
      id: ['', Validators.required],
      vehicle: ['', Validators.required],
      dimension: ['', Validators.required],
      image: ['', Validators.required],
    })
  }
  get f() { return this.referenceForm.controls; }

  ngOnInit() {
    this.referenceService.referenceUpdateEvent.subscribe((data: Reference) => {
      this.isUpdate = true;
      this.referenceForm.patchValue(data);
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.referenceForm.invalid) {
      console.log(this.referenceForm)
      return;
    }
    if(this.isUpdate){
      this.referenceService.updateReference(this.referenceForm.value)
        .subscribe(() => {
          this.referenceService.getReferences().subscribe((referencesData : Reference[]) => {
            this.referenceService.referenceDataListEvent.emit(referencesData);
            this.onReset();
            this.isUpdate = false;
          })
        })
    } else {
      this.referenceService.createReference(this.referenceForm.value)
        .subscribe(() => {
          this.referenceService.getReferences().subscribe((referencesData : Reference[]) => {
            this.referenceService.referenceDataListEvent.emit(referencesData);
            this.onReset();
          })
        })
    }

  }

  onReset() {
    this.submitted = false;
    this.referenceForm.reset();
  }
}
