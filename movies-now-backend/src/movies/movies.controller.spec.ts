import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
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

describe('MoviesController', () => {
  let controller: MoviesController;
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            getMovieDetails: jest.fn().mockResolvedValue(movieEntity),
          },
        },
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMovieDetails', () => {
    it('should return the details of a given movie title', async () => {
      //Arrange
      const body: CreateMovieDto = {
        title: 'Test',
      };
      //Act
      const result = await controller.getMovieDetails(body);
      //Assert
      expect(result).toEqual(movieEntity);
      expect(service.getMovieDetails).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      //Arrange
      const body: CreateMovieDto = {
        title: 'Test',
      };
      //Act
      jest.spyOn(service, 'getMovieDetails').mockRejectedValueOnce(new Error());
      //Assert
      expect(controller.getMovieDetails(body)).rejects.toThrowError();
    });
  });
});
