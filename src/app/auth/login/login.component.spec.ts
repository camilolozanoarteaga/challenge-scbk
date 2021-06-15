import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  ControlValueAccessor,
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomInputTextComponent } from 'src/app/shared/components/custom-input-text/custom-input-text.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginComponent, CustomInputTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
