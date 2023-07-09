import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import favoritesSlice from "./favoritesSlice";

export default configureStore({
  reducer: {
    movie: movieSlice,
    favorites: favoritesSlice
  }
})