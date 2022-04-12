import { Role } from './../../roles/roles.entity';
import { getRepository, MigrationInterface } from 'typeorm';

const roles = [
  {
    value: 'ADMIN',
    description: 'administrator',
  },
  {
    value: 'USER',
    description: 'user',
  },
];

export class Create1649160347231 implements MigrationInterface {
  name = 'Create1649160347231';

  public async up(): Promise<void> {
    const repository = getRepository(Role);
    const createRolesPromises = roles.map(async (role) => {
      return repository.save(role);
    });

    await Promise.all(createRolesPromises);
  }

  public async down(): Promise<void> {
    const repository = getRepository(Role);
    const deletedRoles = await Promise.all(
      roles.map(async (role) => {
        return repository.findOne({
          value: role.value,
        });
      }),
    );

    await repository.remove(deletedRoles);
  }
}
