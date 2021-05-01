import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Empresa from '@model/Empresa';
import Mesa from '@model/Mesa';

@Index('pkey_vaga', ['id'], { unique: true })
@Entity('vaga')
export default class Vaga {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne((type) => Mesa, { eager: true })
  @JoinColumn()
  mesa: Mesa;

  @ManyToOne((type) => Empresa, (empresa) => empresa.vagas)
  empresa: Empresa;

  @Column({ name: 'expires', type: 'timestamp' })
  expires: Date;

  @Column({ name: 'horario_ini', type: 'timestamp' })
  expiresIni: Date;

  @Column({ name: 'cpf', type: 'varchar', length: 255 })
  cpf: string;

  @Column({ name: 'confirmado', type: 'boolean', default: false })
  confirmado: boolean;
}
