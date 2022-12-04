import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsureListComponent } from './usure-list.component';

describe('UsureListComponent', () => {
  let component: UsureListComponent;
  let fixture: ComponentFixture<UsureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
