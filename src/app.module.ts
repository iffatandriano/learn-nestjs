import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';
import entities from './typeorm';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'tutorial_db',
      entities,
      synchronize: true,
    }),
    AuthModule,
    PassportModule.register({
      session: true,
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
