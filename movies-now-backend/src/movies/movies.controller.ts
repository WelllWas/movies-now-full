import { Controller, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  getMovieDetails(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.getMovieDetails(createMovieDto);
  }
}
