import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
    'movies/fetch',
    async () => {
        const response = await axios.get(`https://cine-sphere-be.vercel.app/movies`)
        if(response){
            return response.data
        }
    }
)

export const addMovieAsync = createAsyncThunk(
    'movies/add',
    async (newMovie) => {
        const response = await axios.post(`https://cine-sphere-be.vercel.app/movies`, newMovie)
        if(response){
            return response.data
        }
    }
)

export const deleteMovieAsync = createAsyncThunk(
    'movies/delete',
    async (movieId) => {
        const response = await axios.delete(`https://cine-sphere-be.vercel.app/movies/${movieId}`)
        if(response){
            return response.data
        }
    }
)

export const movieSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            movies: [],
            status: 'idle',
            error: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchMovies.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.movies = action.payload
                })
                .addCase(fetchMovies.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.payload.error
                })
                .addCase(addMovieAsync.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(addMovieAsync.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.movies.push(action.payload)
                })
                .addCase(addMovieAsync.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.payload.error
                })
                .addCase(deleteMovieAsync.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(deleteMovieAsync.fulfilled, (state, action) => {
                    state.status = 'success',
                    state.movies = state.movies.filter(movie => movie._id !== action.payload.movie._id)
                })
                .addCase(deleteMovieAsync.rejected, (state, action) => {
                    state.status = 'error',
                    state.error = action.payload.error
                })
        }
    }
)

export default movieSlice.reducer