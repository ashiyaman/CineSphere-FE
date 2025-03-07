import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, deleteMovieAsync } from './movieSlice'
import { Link, useNavigate } from 'react-router-dom'
import MovieList from './MovieList'

const Movies = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {movies, status, error} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const updateMovieHandler = (movie) => {
        navigate('/addMovie', {state: movie})
    }

    const deleteMovieHandler = (movieId) => {
        dispatch(deleteMovieAsync(movieId))
    }

    return (
        <main className='container py-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className='my-3 text-warning'>Movie List</h2>
                <Link to='/addMovie' className='btn btn-outline-warning fw-bold'>Add Movie</Link>
            </div>
            

            {status === 'loading' && <p className='text-info'>Loading movies...</p>}
            {error && <p className='text-danger'>{error}</p>}
            {movies && movies.length === 0 && <p className='text-info'>No Movie Found. Please Add a Movie.</p>}

            <div className='row'>
                {movies?.length > 0 && status === 'success' && 
                   <MovieList movies={movies} onUpdate={updateMovieHandler} onDelete={deleteMovieHandler}/>                   
                }
            </div>
        </main>
    )
}

export default Movies