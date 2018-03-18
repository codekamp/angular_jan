import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {Observable} from 'rxjs/Observable';

export class SaveDataGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    return component.loginFormGroup.pristine;
  }
}
