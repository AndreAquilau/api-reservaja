import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import { isPast } from 'date-fns';
import Vaga from '@model/Vaga';
import Mesa from '@model/Mesa';

class VagaController {
  async index(resquest: Request, response: Response): Promise<any> {
    try {
      const repository = getRepository(Vaga);
      const res = await repository.find();

      return response.status(200).json({
        vagas: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async show(resquest: Request, response: Response): Promise<any> {
    try {
      const { id } = resquest.params;
      const repository = getRepository(Vaga);
      const res = await repository.findOne({ where: { id: Number(id) } });

      return response.status(200).json({
        vaga: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async store(resquest: Request, response: Response): Promise<any> {
    try {
      const { empresa, mesa, cpf, expires, expiresIni } = resquest.body;
      const repository = getRepository(Vaga);
      const repositoryMesa = getRepository(Mesa);

      const res = await repository
        .save({
          mesa,
          empresa,
          cpf,
          expires: new Date(expires),
          expiresIni: new Date(expiresIni),
        })
        .then(async (vaga) => {
          await repositoryMesa.update({ id: mesa.id }, { ocupada: true });
          return vaga;
        });

      return response.status(201).json({
        vaga: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async update(resquest: Request, response: Response): Promise<any> {
    try {
      const { id } = resquest.params;
      const repository = getRepository(Vaga);
      const res = await repository.update({ id: Number(id) }, resquest.body);

      return response.status(200).json({
        vaga: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async delete(resquest: Request, response: Response): Promise<any> {
    try {
      const { id } = resquest.params;
      const repository = getRepository(Vaga);
      const res = await repository.delete({ id: Number(id) });

      return response.status(200).json({
        user: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async verificar(resquest: Request, response: Response): Promise<any> {
    try {
      console.log(`entrou1`);
      const repository = getRepository(Vaga);
      const repositoryMesa = getRepository(Mesa);
      const res = await repository.find().then(async (vagas) => {
        console.log(`entrou2`);
        vagas.map(async (vaga, index, array) => {
          console.log(`entrou3`);
          if (isPast(new Date(vaga.expires)) && vaga.confirmado === false) {
            await repositoryMesa
              .update({ id: vaga.mesa.id }, { ocupada: false })
              .then(async (row) => {
                console.log(row.affected);
                await repository.delete({ id: vaga.id });
              })

              .catch((err) => console.log(err));
          }
        });
      });

      return response.status(200).json({
        res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }
}

export default new VagaController();
