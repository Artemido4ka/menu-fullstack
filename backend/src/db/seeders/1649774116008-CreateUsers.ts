import { getRepository, MigrationInterface } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { Role } from 'src/roles/roles.entity';
import { User } from 'src/users/users.entity';

const users = [
  {
    roles: ['ADMIN'],
    email: 'admin@mail.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Adminovich',
    isEmailConfirmed: true,
  },
  {
    roles: ['USER'],
    email: 'user@mail.com',
    password: '1234',
    firstName: 'User',
    lastName: 'Userovich',
    isEmailConfirmed: true,
    weight: 65,
    height: 174,
    age: 21,
    activity: 1.375,
    sex: 'male',
  },
];

export class CreateUsers1649774116008 implements MigrationInterface {
  name = 'CreateUsers1649774116008';

  public async up(): Promise<void> {
    const userRepository = getRepository(User);
    const roleRepository = getRepository(Role);

    const createUsersPromises = users.map(async (user) => {
      const role = await roleRepository.findOne({ value: user.roles[0] });
      const hashPassword = await bcrypt.hash(user.password, 5);
      const newUser = await userRepository.create({
        ...user,
        roles: [role],
        password: hashPassword,
      });

      return userRepository.save(newUser);
    });
    await Promise.all(createUsersPromises);
  }

  public async down(): Promise<void> {
    const repository = getRepository(User);
    const deletedUsers = await Promise.all(
      users.map(async (user) => {
        return repository.findOne({
          email: user.email,
        });
      }),
    );

    await repository.remove(deletedUsers);
  }
}
