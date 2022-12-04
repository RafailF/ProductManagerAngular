import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsureComponent } from './usure.component';

describe('UsureComponent', () => {
  let component: UsureComponent;
  let fixture: ComponentFixture<UsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
