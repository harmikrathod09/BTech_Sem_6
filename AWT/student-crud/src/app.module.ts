import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Harmik09',
      database: 'awt_lab',
      entities: [Student],
      synchronize: true, 
    }),StudentModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
