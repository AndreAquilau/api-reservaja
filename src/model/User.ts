import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Empresa from '@model/Empresa';

@Index('pkey_user', ['id'], { unique: true })
@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 255 })
  password: string;

  @Column({ name: 'cpf', type: 'varchar', length: 255 })
  cpf: string;

  @ManyToOne((type) => Empresa, (user) => user.users, { eager: true })
  empresa: Empresa;
}
