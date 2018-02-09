import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: './update-user.component.html',
	styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
    public user: User;
    constructor(private route: ActivatedRoute,
        private router: Router,
                private userService: UserService,
                private location: Location) { }
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe(user => this.user = user);
    }
    goToUsersList(): void {
        this.router.navigate(['/manage-user']);
    }
}
