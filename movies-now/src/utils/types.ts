export type movieType = {
  Title: string,
  Year: string,
  Genre: string,
  Director: string,
  Actors: string,
  Poster: string,
  imdbRating: string,
  Plot: string
}

export type searchPropsType = {
  resetDetails: Function,
  setDetails: Function,
  setLoading: Function,
  handleError: Function
}

export type modalFavoritesType = {
  trigger: boolean
  setTrigger: Function
}

export type navbarPropsType = {
  setTrigger: Function
  setHome: Function
}

export type footerPropsType = {
  setHome: Function
}

export type movieSearchType = {
  movie: string
}