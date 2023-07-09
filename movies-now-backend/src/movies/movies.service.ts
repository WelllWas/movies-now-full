import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import axios from 'axios';

@Injectable()
export class MoviesService {
  async getMovieDetails(createMovieDto: CreateMovieDto) {
    const endpoint = `https://www.omdbapi.com/?t=${createMovieDto.title}&apikey=f1748035`;
    const payload = await axios.get(endpoint);
    if (payload.data.Response === 'True') {
      return {
        Title: payload.data.Title,
        Year: payload.data.Year,
        Genre: payload.data.Genre,
        Director: payload.data.Director,
        Actors: payload.data.Actors,
        Poster: payload.data.Poster,
        imdbRating: payload.data.imdbRating,
        Plot: payload.data.Plot,
      };
    } else {
      return {
        Response: 'False',
      };
    }
  }
}
