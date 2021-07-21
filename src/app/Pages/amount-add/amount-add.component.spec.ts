import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAddComponent } from './amount-add.component';

describe('AmountAddComponent', () => {
  let component: AmountAddComponent;
  let fixture: ComponentFixture<AmountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
