import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from '@model/User';
import Mesa from '@model/Mesa';
import Vaga from '@model/Vaga';

@Index('pkey_empresa', ['id'], { unique: true })
@Entity('empresa')
export default class Empresa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'fantasia', type: 'varchar', length: 255 })
  fantasia: string;

  @Column({ name: 'cnpj', type: 'varchar', length: 255 })
  cnpj: string;

  @Column({ name: 'endereco', type: 'varchar', length: 255 })
  endereco: string;

  @Column({ name: 'inativo', type: 'boolean' })
  inativo: boolean;

  @OneToMany((type) => User, (user) => user.empresa)
  users: User[];

  @OneToMany((type) => Mesa, (mesa) => mesa.empresa)
  mesas: Mesa[];

  @OneToMany((type) => Vaga, (vaga) => vaga.empresa)
  vagas: Vaga[];
}
