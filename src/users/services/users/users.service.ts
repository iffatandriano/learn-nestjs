import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      username: 'iffat',
      password: 'iffat',
    },
    {
      id: 3,
      username: 'andriano',
      password: 'andriano',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUsersById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
