import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import Mesa from '@model/Mesa';

class MesaController {
  async index(resquest: Request, response: Response): Promise<any> {
    try {
      const repository = getRepository(Mesa);
      const res = await repository.find({
        order: {
          id: 'ASC',
        },
      });

      return response.status(200).json({
        mesas: res,
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
      const repository = getRepository(Mesa);
      const res = await repository.findOne({ where: { id: Number(id) } });

      return response.status(200).json({
        mesa: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async store(resquest: Request, response: Response): Promise<any> {
    try {
      const { empresa, indentificador, ocupada, quantidade, quantidadelimite } = resquest.body;
      const repository = getRepository(Mesa);
      const res = await repository.save({
        empresa,
        indentificador,
        ocupada: Boolean(ocupada),
        quantidade,
        quantidadelimite,
      });

      return response.status(201).json({
        mesa: res,
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
      const repository = getRepository(Mesa);
      const res = await repository.update({ id: Number(id) }, resquest.body);

      return response.status(200).json({
        mesa: res,
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
      const repository = getRepository(Mesa);
      const res = await repository.delete({ id: Number(id) });

      return response.status(200).json({
        mesa: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }
}
export default new MesaController();
