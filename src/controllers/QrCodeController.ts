import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import QrCode from '@model/QrCode';

class QrCodeController {
  async index(resquest: Request, response: Response): Promise<any> {
    try {
      const repository = getRepository(QrCode);
      const res = await repository.find();

      return response.status(200).json({
        qrcodes: res,
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
      const repository = getRepository(QrCode);
      const res = await repository.findOne({ where: { id: Number(id) } });

      return response.status(200).json({
        qrcode: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }

  async store(resquest: Request, response: Response): Promise<any> {
    try {
      const { cpf, expires, expiresIni } = resquest.body;
      const repository = getRepository(QrCode);
      const res = await repository.save({
        cpf,
        expires: new Date(expires),
        expiresIni: new Date(expiresIni),
      });

      return response.status(201).json({
        qrcode: res,
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
      const repository = getRepository(QrCode);
      const res = await repository.update({ id: Number(id) }, resquest.body);

      return response.status(200).json({
        qrcode: res,
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
      const repository = getRepository(QrCode);
      const res = await repository.delete({ id: Number(id) });

      return response.status(200).json({
        qrcode: res,
      });
    } catch (err) {
      return response.status(500).json({
        errors: [err],
      });
    }
  }
}
export default new QrCodeController();
