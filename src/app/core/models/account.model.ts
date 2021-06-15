export interface Accounts {
  cuentas: AccountsInformation[];
}

export interface AccountsInformation {
  cedula: string;
  cuentaId: string;
  tipoCuenta: string;
  estado: string;
  valorDisponible: number;
}
