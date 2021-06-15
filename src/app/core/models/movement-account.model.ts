export interface MovementAccount {
  movimientos: MovementAccountInformation[];
}

export interface MovementAccountInformation {
  id: number;
  cuentaId: string;
  fechaTransaccion: string;
  montroTransaccion: number;
  descripcion: string;
}
