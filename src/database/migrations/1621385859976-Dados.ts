import {MigrationInterface, QueryRunner} from "typeorm";

export class Dados1621385859976 implements MigrationInterface {
    name = 'Dados1621385859976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "cpf" character varying(255) NOT NULL, "empresaId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_user" ON "user" ("id") `);
        await queryRunner.query(`CREATE TABLE "mesa" ("id" SERIAL NOT NULL, "quantidade" integer NOT NULL, "ocupada" boolean NOT NULL, "quantidadelimite" integer NOT NULL, "indentificador" character varying(255) NOT NULL, "empresaId" integer, CONSTRAINT "PK_1ddbc4791ca87a1032b5b759e99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_mesa" ON "mesa" ("id") `);
        await queryRunner.query(`CREATE TABLE "vaga" ("id" SERIAL NOT NULL, "expires" TIMESTAMP NOT NULL, "horario_ini" TIMESTAMP NOT NULL, "cpf" character varying(255) NOT NULL, "confirmado" boolean NOT NULL DEFAULT false, "mesaId" integer, "empresaId" integer, CONSTRAINT "REL_962df9ee5b7814afff2ce920e6" UNIQUE ("mesaId"), CONSTRAINT "PK_8fc4878a1eec234441d6696c3cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_vaga" ON "vaga" ("id") `);
        await queryRunner.query(`CREATE TABLE "empresa" ("id" SERIAL NOT NULL, "fantasia" character varying(255) NOT NULL, "cnpj" character varying(255) NOT NULL, "endereco" character varying(255) NOT NULL, "inativo" boolean NOT NULL, CONSTRAINT "PK_bee78e8f1760ccf9cff402118a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_empresa" ON "empresa" ("id") `);
        await queryRunner.query(`CREATE TABLE "qrcode" ("id" SERIAL NOT NULL, "expires" TIMESTAMP NOT NULL, "horario_ini" TIMESTAMP NOT NULL, "cpf" character varying(255) NOT NULL, CONSTRAINT "PK_9aaafe9e77dce17001051dab68a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_qrcode" ON "qrcode" ("id") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c61de3f105d4df98f8f62c95d77" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mesa" ADD CONSTRAINT "FK_32c190e3e267367fff7251d0757" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vaga" ADD CONSTRAINT "FK_962df9ee5b7814afff2ce920e6f" FOREIGN KEY ("mesaId") REFERENCES "mesa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vaga" ADD CONSTRAINT "FK_73b1aeaa3853fe3a83e58f6b5e9" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vaga" DROP CONSTRAINT "FK_73b1aeaa3853fe3a83e58f6b5e9"`);
        await queryRunner.query(`ALTER TABLE "vaga" DROP CONSTRAINT "FK_962df9ee5b7814afff2ce920e6f"`);
        await queryRunner.query(`ALTER TABLE "mesa" DROP CONSTRAINT "FK_32c190e3e267367fff7251d0757"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c61de3f105d4df98f8f62c95d77"`);
        await queryRunner.query(`DROP INDEX "pkey_qrcode"`);
        await queryRunner.query(`DROP TABLE "qrcode"`);
        await queryRunner.query(`DROP INDEX "pkey_empresa"`);
        await queryRunner.query(`DROP TABLE "empresa"`);
        await queryRunner.query(`DROP INDEX "pkey_vaga"`);
        await queryRunner.query(`DROP TABLE "vaga"`);
        await queryRunner.query(`DROP INDEX "pkey_mesa"`);
        await queryRunner.query(`DROP TABLE "mesa"`);
        await queryRunner.query(`DROP INDEX "pkey_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
