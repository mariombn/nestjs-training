import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

//    @Get(':id')
//    show(
//        @Param() params
//    ) {
//        return `Curso #${params.id}`;
//    }
    
    @Get(':id')
    show(
        @Param('id') id: string
    ) {
        return this.courseService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(
        @Body() body
    ) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body
    ) {
        return `Atualização do curso Curso #${id}`;
    }

    @Delete(':id')
    delete(
        @Param('id') id: string
    ) {
        return `Exclusão do Curso #${id}`;
    }
}
