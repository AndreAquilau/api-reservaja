import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pkey_qrcode', ['id'], { unique: true })
@Entity('qrcode')
export default class Qrcode {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'expires', type: 'timestamp' })
  expires: Date;

  @Column({ name: 'horario_ini', type: 'timestamp' })
  expiresIni: Date;

  @Column({ name: 'cpf', type: 'varchar', length: 255 })
  cpf: string;
}
