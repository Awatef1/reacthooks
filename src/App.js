import { useState } from 'react';
import {MovieList} from './Components/MovieList';
import {MovieData} from './Data';
import './App.css';
import Filter from './Components/Filter';
import AddModal from './Components/AddMovie';


function App() {
  const [movies, setMovies]=useState(MovieData);
  const [FilterTitel,setFilterTitel]= useState("");
  const [FilterRating,setFilterRating]= useState(0)

  return (
    <div className="App" style={{minHeight:"100vh"}}>
      
      <header className="App-header">
      <Filter  setFilterRating={setFilterRating}  FilterRataing={FilterRating} setFilterTitel={setFilterTitel} />
      <AddModal setMovies={setMovies} movies={movies} />
      <MovieList FilterRating={FilterRating} FilterTitel={FilterTitel} movies={movies} />
      </header>
     
     
    </div>
  );
}

export default App;