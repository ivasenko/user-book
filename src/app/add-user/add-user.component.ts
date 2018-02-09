import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    public users: User[];
    public user: User = new User;
    constructor(private router: Router,
        private userService: UserService) { }

    public getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit(): void {
        this.getUsers();
    }
    public addUser(): void {
        this.userService.addUser(this.user);
        this.router.navigate(['/manage-user']);
    }
}
