import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Movies from './features/movies/Movies'
import MovieForm from './features/movies/MovieForm'

function App() {

  return (
    <BrowserRouter>
      <div className='bg-dark text-light' style={{minHeight: '100vh'}}>
        <Routes>
          <Route path='/' element={<Movies />}/>
          <Route path='/addMovie' element={<MovieForm />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
