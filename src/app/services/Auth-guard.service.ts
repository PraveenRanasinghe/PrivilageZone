import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./Auth.service";

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{

constructor(private auth: AuthService,private router : Router){

}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.validateUser()){
      return true;
    }else{
      this.router.navigate(['/error'],{queryParams:{messageName:"Access Denied"}});
      return false;
    }
  }

}
