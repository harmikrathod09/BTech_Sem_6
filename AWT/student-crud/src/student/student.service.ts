import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo:Repository<Student>) {}
  

  create(createStudentDto: CreateStudentDto) {
    const student=this.studentRepo.create(createStudentDto)
    return this.studentRepo.save(student);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(Studentid: number) {
    return this.studentRepo.findOneBy({Studentid});
  }

  async update(Studentid: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepo.update(Studentid, updateStudentDto);
    return this.findOne(Studentid);
  }

  remove(Studentid: number) {
    return this.studentRepo.delete({Studentid});
  }
}
