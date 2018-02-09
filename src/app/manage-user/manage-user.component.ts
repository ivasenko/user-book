import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
	templateUrl: './manage-user.component.html',
	styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
	public users: User[];

	constructor(private router: Router,
		private userService: UserService) { }
				
    ngOnInit(): void {
        this.getUsers();
	}
	
	public getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
	public updateUser(id:number): void {
		this.router.navigate(['/update-user', id]);
	}
	public deleteUser(id:number): void {
		this.userService.deleteUser(id);
	}
}
