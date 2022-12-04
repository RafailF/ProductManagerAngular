import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsureService} from "../usure.service";
import {Usure} from "../usure";

@Component({
  selector: 'app-usure-add-edit',
  templateUrl: './usure-add-edit.component.html',
  styleUrls: ['./usure-add-edit.component.css']
})
export class UsureAddEditComponent implements OnInit{

  usureForm : FormGroup;
  submitted = false;
  isUpdate = false;

  constructor(private formBuilder: FormBuilder, private usureService: UsureService) {
    this.usureForm = this.formBuilder.group({
      id: ['', Validators.required],
      vehicle: ['', Validators.required],
      rate: ['', Validators.required],
      image: ['', Validators.required],
    })
  }
  get f() { return this.usureForm.controls; }

  ngOnInit() {
    this.usureService.usureUpdateEvent.subscribe((data: Usure) => {
      this.isUpdate = true;
      this.usureForm.patchValue(data);
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.usureForm.invalid) {
      console.log(this.usureForm)
      return;
    }
    if(this.isUpdate){
      this.usureService.updateUsure(this.usureForm.value)
        .subscribe(() => {
          this.usureService.getUsures().subscribe((usuresData : Usure[]) => {
            this.usureService.usureDataListEvent.emit(usuresData);
            this.onReset();
            this.isUpdate = false;
          })
        })
    } else {
      this.usureService.createUsure(this.usureForm.value)
        .subscribe(() => {
          this.usureService.getUsures().subscribe((usuresData : Usure[]) => {
            this.usureService.usureDataListEvent.emit(usuresData);
            this.onReset();
          })
        })
    }

  }

  onReset() {
    this.submitted = false;
    this.usureForm.reset();
  }

}
