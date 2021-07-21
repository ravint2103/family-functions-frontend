import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountEditComponent } from './amount-edit.component';

describe('AmountEditComponent', () => {
  let component: AmountEditComponent;
  let fixture: ComponentFixture<AmountEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
