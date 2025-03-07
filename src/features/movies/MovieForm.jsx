import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieAsync, updateMovieAsync } from './movieSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const MovieForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectedMovie = useLocation().state

    const [title, setTitle] = useState(selectedMovie ? selectedMovie.title : '')
    const [director, setDirector] = useState(selectedMovie ? selectedMovie.director : '')
    const [genre, setGenre] = useState(selectedMovie ? selectedMovie.genre : '') 
    const [posterUrl, setPosterUrl] = useState(selectedMovie ? selectedMovie.posterUrl : '') 

    const handleSubmit  = (e) => {
        e.preventDefault()

        if (!title || !director || !genre) {
            alert('Please Enter all the Details')
            return
        }
        
        const newMovie = {
            title,
            director,
            genre,
            posterUrl: posterUrl || 'https://placehold.co/'
        }

        if (selectedMovie) {
            dispatch(updateMovieAsync({movieId: selectedMovie._id, movieData: newMovie}))
        } else {
            dispatch(addMovieAsync(newMovie))
        }

        setTitle('')
        setDirector('')
        setGenre('')
        setPosterUrl('')
        navigate('/')
    }    

    return (
        <main className='container py-4'>
            <h2 className='my-3 text-warning'>{selectedMovie ? 'Update' : 'Add'} Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' required value={title} className='form-control my-2 border-warning' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br/>
                <input type='text' required value={director} className='form-control my-2 border-warning' placeholder='Director' onChange={(e) => setDirector(e.target.value)}/><br/>
                <input type='text' required value={genre} className='form-control my-2 border-warning' placeholder='Genre' onChange={(e) => setGenre(e.target.value)}/><br/>
                <input type='text' required value={posterUrl} className='form-control my-2 border-warning' placeholder='Poster URL' onChange={(e) => setPosterUrl(e.target.value)}/><br/>
                
                {selectedMovie ? 
                    <input type='submit' className='btn btn-outline-warning fw-bold' value='Update' /> :
                    <input type='submit' className='btn btn-outline-warning fw-bold' value='Add' />
                }                
            </form>
        </main>
    )
}

export default MovieForm
