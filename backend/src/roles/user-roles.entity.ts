// import { User } from 'src/users/users.entity';
// import { Role } from './roles.model';
// import {
//   Column,
//   DataType,
//   Model,
//   Table,
//   ForeignKey,
// } from 'sequelize-typescript';

// import { Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
// export class UserRoles extends Model<UserRoles> {
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @ForeignKey(() => Role)
//   @Column({ type: DataType.INTEGER })
//   roleId: number;

//   @ForeignKey(() => User)
//   @Column({ type: DataType.INTEGER })
//   userId: number;
// }

// @Entity()
// export class UserRoles {
//   @PrimaryGeneratedColumn()
//   id: number;
// }
