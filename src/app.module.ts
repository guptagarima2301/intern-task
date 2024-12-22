import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'gupta2301@', // Your PostgreSQL password
      database: 'userdb',      // Database name
      autoLoadEntities: true,  // Automatically load entities
      synchronize: true,       // Sync schema with database (disable in production)
    }),
    UsersModule,
  ],
})
export class AppModule {}
