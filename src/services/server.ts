import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from '@services/app';

createConnection()
  .then(() => {
    console.log(`Connection Success DataBase`);
    app.emit('Server On');
  })
  .catch((err) => {
    console.log(err);
  });

app.on('Server On', () => {
  app.listen(process.env.PORT, () => {
    console.log(`${process.env.BASE_URL}:${process.env.PORT}`);
  });
});

export {};
