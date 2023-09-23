import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberFormComponent } from './input-number-form.component';

describe('InputNumberFormComponent', () => {
  let component: InputNumberFormComponent;
  let fixture: ComponentFixture<InputNumberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNumberFormComponent]
    });
    fixture = TestBed.createComponent(InputNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
