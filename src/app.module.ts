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
      password: 'gupta2301@', 
      database: 'userdb',      
      autoLoadEntities: true,  
      synchronize: true,      
    }),
    UsersModule,
  ],
})
export class AppModule {}
