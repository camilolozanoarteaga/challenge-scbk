import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardsService implements CanActivate {
  private ISLOGED_ITEM = 'isLoged';
  private isLoged: string = localStorage.getItem(this.ISLOGED_ITEM);

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoged === 'true') {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
}
