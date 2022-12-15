import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
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
    create(
        @Body() body
    ) {
        return this.courseService.create(body);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body
    ) {
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    delete(
        @Param('id') id: string
    ) {
        return this.courseService.remove(id);
    }
}
