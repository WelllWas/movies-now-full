export class Movie {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Poster: string;
  imdbRating: string;
  Plot: string;

  constructor(movie?: Partial<Movie>) {
    this.Title = movie.Title;
    this.Year = movie.Year;
    this.Genre = movie.Genre;
    this.Director = movie.Director;
    this.Actors = movie.Actors;
    this.Poster = movie.Poster;
    this.imdbRating = movie.imdbRating;
    this.Plot = movie.Plot;
  }
}
