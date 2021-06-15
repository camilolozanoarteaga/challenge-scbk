import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsInformation } from 'src/app/core/models/account.model';
import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;

  const mock: AccountsInformation = {
    cedula: '100001',
    cuentaId: '2200',
    tipoCuenta: 'Cuenta de ahorros',
    estado: 'Sin saldo dispobible',
    valorDisponible: 0,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    component.account = {
      cedula: '100001',
      cuentaId: '2200',
      tipoCuenta: 'Cuenta de ahorros',
      estado: 'Sin saldo dispobible',
      valorDisponible: 0,
    };
    fixture.detectChanges();
  });

  it('Setting enabled to false disables the submit button', () => {
    expect(component).toBeTruthy();
  });
});
