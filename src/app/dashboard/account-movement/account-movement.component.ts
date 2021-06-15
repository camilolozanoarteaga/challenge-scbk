import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementAccountInformation } from 'src/app/core/models/movement-account.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-account-movement',
  templateUrl: './account-movement.component.html',
  styleUrls: ['./account-movement.component.css'],
})
export class AccountMovementComponent implements OnInit {
  movementAccountList: MovementAccountInformation[];
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params.id;
    this.getAccountMovement(idParam);
  }

  private getAccountMovement(idParam: string): void {
    this.apiService
      .getAccountMovement()
      .subscribe((movementAccount: MovementAccountInformation[]) => {
        const movement = movementAccount.filter((m) => m.cuentaId === idParam);
        this.movementAccountList = movement;
      });
  }
}
