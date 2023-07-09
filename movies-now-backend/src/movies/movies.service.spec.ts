import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

const movieEntity = new Movie({
  Title: 'test',
  Year: 'test',
  Genre: 'test',
  Director: 'test',
  Actors: 'test',
  Poster: 'test',
  imdbRating: 'test',
  Plot: 'test',
});

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MoviesService,
          useValue: {
            getMovieDetails: jest.fn().mockResolvedValue(movieEntity),
          },
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMovieDetails', () => {
    it('should return the details of a given movie title', async () => {
      //Arrange
      const body: CreateMovieDto = {
        title: 'test',
      };
      //Act
      const result = await service.getMovieDetails(body);
      //Assert
      expect(result).toEqual(movieEntity);
    });
  });
});
