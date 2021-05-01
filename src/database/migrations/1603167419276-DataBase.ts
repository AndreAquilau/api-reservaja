import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterVagas1603767399891 implements MigrationInterface {
  name = 'AlterVagas1603767399891';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "vaga" ADD "confirmado" boolean NOT NULL DEFAULT false`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "vaga" DROP COLUMN "confirmado"`);
  }
}
