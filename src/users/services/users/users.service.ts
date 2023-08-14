import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'iffat',
      password: 'iffat',
    },
    {
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
}
