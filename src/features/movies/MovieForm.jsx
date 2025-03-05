import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addMovieAsync } from './movieSlice'
import { useNavigate } from 'react-router-dom'

const MovieForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('') 
    const [posterUrl, setPosterUrl] = useState('') 

    const handleSubmit  = (e) => {
        e.preventDefault()

        if(!title || !director || !genre){
            alert('Please Enter all the Details')
            return
        }
        const newMovie = {
            title: title,
            director: director,
            genre: genre,
            posterUrl: posterUrl || 'https://placehold.co/'
        }
        const addedMovie = dispatch(addMovieAsync(newMovie))
        if(addedMovie){
            setTitle('')
            setDirector('')
            setGenre('')
            setPosterUrl('')
            navigate('/')
        }
    }

    return (
        <main className='container py-4'>
            <h2 className='my-3 text-warning'>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' required className='form-control my-2 border-warning' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br/>
                <input type='text' required className='form-control my-2 border-warning' placeholder='Director' onChange={(e) => setDirector(e.target.value)}/><br/>
                <input type='text' required className='form-control my-2 border-warning' placeholder='Genre' onChange={(e) => setGenre(e.target.value)}/><br/>
                <input type='text' required className='form-control my-2 border-warning' placeholder='Poster URL' onChange={(e) => setPosterUrl(e.target.value)}/><br/>
                <input type='submit' className='btn btn-outline-warning fw-bold' value='Add' />
            </form>
        </main>
    )
}

export default MovieForm