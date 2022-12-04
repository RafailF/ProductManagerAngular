import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceAddEditComponent } from './reference-add-edit.component';

describe('ReferenceAddEditComponent', () => {
  let component: ReferenceAddEditComponent;
  let fixture: ComponentFixture<ReferenceAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
