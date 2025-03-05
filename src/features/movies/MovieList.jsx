const MovieList = ({movies, onDelete}) => {

    return (
        <div className='row g-3'>
           { movies.map(movie => 
                <div key={movie._id} className='col-md-3 d-flex'>
                    <div className='card bg-dark text-light border-warning shadow-lg w-100 d-flex flex-column'>
                        <img src={movie.posterUrl ? movie.posterUrl : 'https://placehold.co/'} 
                             className='card-img-top' alt={movie.title} 
                             style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <button 
                            onClick={() => onDelete(movie._id)} 
                            className='btn btn-warning bg-warning text-dark btn-outline-dark fw-bold border-2 rounded-pill position-absolute top-0 end-0 m-2 px-3 py-1'
                           >
                            X
                        </button>
                        <div className='card-body d-flex flex-column flex-grow-1'>
                            <h5 className='card-title text-warning fw-bold'>{movie.title}</h5>
                            <p className='card-text'><strong>Director:</strong> {movie.director}</p>
                            <p className='card-text'><strong>Genre:</strong> {movie.genre}</p>
                        </div> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieList
