import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Fundamentos do framework nestJS",
      description: "Fundamentos do framework nestJS",
      tags: ["node.js", "nestjs", "javascript", "typescript"]
    }
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course =  this.courses.find(
      (course: Course) => course.id === Number(id)
    );

    if (!course) {
      throw new HttpException(
        `Course ID ${id} não encontrado`,
        HttpStatus.NOT_FOUND
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses[indexCourse] = updateCourseDto;
    }
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }

}
