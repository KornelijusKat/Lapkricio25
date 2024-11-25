import { useState, useEffect } from 'react'
import Loading from './components/loading/Loading';
import Tours from './components/tours/Tours';


const url = "https://www.course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);

    }catch(error){
      console.log(error);
      setLoading(false);
    }
  };
  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }
  useEffect(()=>{
    fetchTours();
    console.log('Effect up and ready');
  },[])
  console.log(tours);
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length == 0){
    return(
      <div className='title'>
        <h2>No tours</h2>
        <button className='btn' onClick={(fetchTours)}>Refresh</button>
      </div>
    )
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour}/>
    </>
  )
}

export default App
