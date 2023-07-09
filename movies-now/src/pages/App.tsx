import './App.css';
import { Navbar, Footer, Search, Details, CarouselMovies, Loading, Error, Favorites } from '../utils/imports'
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [favorites, setFavorites] = useState(false);

  function toggleFavorites() {
    setDetails(false)
    setFavorites(!favorites);
  }

  function isDetailsShowing(){
    handleError(false)
    if(!details){
      setFavorites(false)
      setDetails(!details)
      setLoading(false)
    }
  }

  function isLoading(){
    setLoading(!loading)
  }

  function resetDetails(){ 
    setFavorites(false)
    handleError(false)
    setLoading(false)
    setDetails(false) 
  }

  function handleError(data?: boolean | any){
      setLoading(false)
      setError(data)
  }

  const display = error ? <Error /> : 
                    loading ? <Loading/> : 
                      details ? <Details/>: 
                        favorites ? <Favorites/> :
                          <CarouselMovies />
  
  return (
    <>
    <Navbar setTrigger={toggleFavorites} setHome={resetDetails}/>
    <div className="App">
      <Search setDetails={isDetailsShowing} resetDetails={resetDetails} setLoading={isLoading} handleError={handleError}/>
      {
        display
      }
      <Footer setHome={resetDetails}/>
    </div>
    </>
  );
}

export default App;
