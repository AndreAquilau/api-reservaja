import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import User from '@model/User';

class UserController {
  async index(resquest: Request, response: Response): Promise<any> {
    try {
      const repository = getRepository(User);
      const res = await repository.find();

      return response.status(200).json({
        users: res,
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
      const repository = getRepository(User);
      const res = await repository.findOne({ where: { id: Number(id) } });

      return response.status(200).json({
        user: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async store(resquest: Request, response: Response): Promise<any> {
    try {
      const { cpf, email, name, password, empresa } = resquest.body;
      const repository = getRepository(User);
      const res = await repository.save({
        cpf,
        email,
        name,
        password,
        empresa,
      });

      return response.status(201).json({
        user: res,
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
      const repository = getRepository(User);
      const res = await repository.update({ id: Number(id) }, resquest.body);

      return response.status(200).json({
        user: res,
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
      const repository = getRepository(User);
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
}

export default new UserController();
