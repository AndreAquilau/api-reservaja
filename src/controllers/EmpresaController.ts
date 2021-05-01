import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import Empresa from '@model/Empresa';

class EmpresaController {
  async index(resquest: Request, response: Response): Promise<any> {
    try {
      const repository = getRepository(Empresa);
      const res = await repository.find();

      return response.status(200).json({
        empresas: res,
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
      const repository = getRepository(Empresa);
      const res = await repository.findOne({ where: { id: Number(id) } });

      return response.status(200).json({
        empresa: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async store(resquest: Request, response: Response): Promise<any> {
    try {
      console.log(resquest.body);
      const { cnpj, endereco, fantasia, inativo } = resquest.body;
      const repository = getRepository(Empresa);
      const res = await repository.save({
        cnpj,
        endereco,
        fantasia,
        inativo: Boolean(inativo),
      });

      return response.status(201).json({
        empresa: res,
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
      const repository = getRepository(Empresa);
      const res = await repository.update({ id: Number(id) }, resquest.body);

      return response.status(200).json({
        empresa: res,
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
      const repository = getRepository(Empresa);
      const res = await repository.delete({ id: Number(id) });

      return response.status(200).json({
        empresa: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }
}

export default new EmpresaController();
