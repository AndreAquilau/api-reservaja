import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Empresa from '@model/Empresa';

@Index('pkey_mesa', ['id'], { unique: true })
@Entity('mesa')
export default class Mesa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'quantidade', type: 'integer' })
  quantidade: number;

  @Column({ name: 'ocupada', type: 'boolean' })
  ocupada: boolean;

  @Column({ name: 'quantidadelimite', type: 'integer' })
  quantidadelimite: number;

  @Column({ name: 'indentificador', type: 'varchar', length: 255 })
  indentificador: string;

  @ManyToOne((type) => Empresa, { eager: true })
  empresa: Empresa;
}
