import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsureDetailComponent } from './usure-detail.component';

describe('UsureDetailComponent', () => {
  let component: UsureDetailComponent;
  let fixture: ComponentFixture<UsureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsureDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
