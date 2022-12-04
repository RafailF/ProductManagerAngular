import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDetailComponent } from './reference-detail.component';

describe('ReferenceDetailComponent', () => {
  let component: ReferenceDetailComponent;
  let fixture: ComponentFixture<ReferenceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
