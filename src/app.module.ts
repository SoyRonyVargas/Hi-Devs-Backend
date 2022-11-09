import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'db',
      username: 'user',
      password: 'password'
    }),
    UsersModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
