import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { DataSource } from 'typeorm';

import { AppModule } from './app.module';
import { SessionEntity } from './typeorm/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = app.get(DataSource).getRepository(SessionEntity);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: 'awkdoawkdoawdkawodkaowdwa',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
      store: new TypeormStore({
        cleanupLimit: 2,
        limitSubquery: false,
      }).connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(5001);
}
bootstrap();
