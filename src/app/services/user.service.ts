import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
    public getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
	public addUser(user:User): void {
        this.getUsers().then(users => {
            let maxIndex = users.length - 1;
            let userWithMaxIndex = users[maxIndex];
            user.id = userWithMaxIndex.id + 1;
            users.push(user);
        });
    }
    public getUser(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }
    public deleteUser(id: number): void {
        this.getUsers().then(users => {
            let user = users.find(ob => ob.id === id);
            let userIndex = users.indexOf(user);
            users.splice(userIndex, 1);
        });
    }
}
