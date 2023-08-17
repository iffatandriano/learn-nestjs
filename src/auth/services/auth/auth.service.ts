import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(username);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);

      console.log(matched);

      if (matched) {
        return userDB;
      } else {
        return null;
      }
    }

    return null;
  }
}
