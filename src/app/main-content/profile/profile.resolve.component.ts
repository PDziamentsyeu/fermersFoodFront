import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class ProfileResolveComponent implements Resolve<Profile> {
    loading = true;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile>  {
        let id = this.userService.getUserFromStorage().id;
            return this.userService.getFullUserInfo(id).map(
                profile => {
                    console.log(profile);
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    // this.router.navigate(['/profile']);
                    return profile;
                },
                error => {
                    this.loading = false;
                });
    }

    constructor(private userService: UserService, private router: Router) { }

}