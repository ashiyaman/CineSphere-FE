import { configureStore } from "@reduxjs/toolkit";

import {movieSlice} from "./src/features/movies/movieSlice";

export default configureStore({
    reducer: {
        movies: movieSlice.reducer
    }
})