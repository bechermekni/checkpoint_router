import { useState ,useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList/MovieList';   
import Filter from './components/Filter/Filter'
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';


function App() {
const [movies, setMovies] = useState([
  {
    id: uuidv4(),
    title: "The Blacklist",
    rating: "4",
    trailer: "https://youtu.be/vc-BAjeBFww",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Blacklist_season_5_poster.jpg/220px-The_Blacklist_season_5_poster.jpg",
    description:
      " The Blacklist is an American crime thriller television series that premiered on NBC on September 23, 2013. The show follows Raymond 'Red' Reddington. ",
  },
  {
    id: uuidv4(),
    title: "The Flash",
    rating: 3,
    trailer: "https://youtu.be/hebWYacbdvc",
    posterUrl:
      "https://www.nerdpool.it/wp-content/uploads/2021/10/THE-FLASH-Gold-BootsNew-Suit-1080x1920-1-696x1237.jpeg",
    description:
      " Barry Allen est un jeune scientifique travaillant pour la police de Central City.",
  },
  {
    id: uuidv4(),
    title: " The Equalizer",
    rating: 3,
    trailer: "https://youtu.be/2rZegVSWEXU",
    posterUrl: "https://flxt.tmsimg.com/assets/p19187998_b_v13_ab.jpg",
    description:
      " the Equalizer is an American crime drama television series that premiered on CBS on February 7, 2021. It is the second reboot in the franchise, following the 2014 film and its 2018 and 2023 sequels, and is a reboot of the 1980s series with the same name.",
  },
  {
    id: uuidv4(),
    title: "The Last of Us",
    rating: 4,
    trailer: "https://youtu.be/uLtkt8BonwM",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
    description:
      " L'humanité a été décimée suite à la mutation d'un champignon parasite, le Cordyceps. Vingt ans après le début de cette pandémie, Joel (Pedro Pascal), Ellie (Bella Ramsey) et Tess (Anna Torv), un trio lié par la dureté du monde dans lequel ils vivent, se lancent dans un périple à travers ce qu'il reste des États-Unis.",
  },
  {
    id: uuidv4(),
    title: "Anne Rice's Mayfair Witches",
    rating: 4,
    trailer: "https://youtu.be/EHT8olWP0Us",
    posterUrl:
      "https://fr.web.img4.acsta.net/pictures/22/12/21/09/01/2707123.jpg",
    description:
      " Neurosurgeon Dr. Rowan Fielding learns she is the heiress to a dynasty of powerful witches haunted by a sinister spirit.",
  },

  {
    id: uuidv4(),
    title: "Your Honor",
    rating: 4,
    trailer: "https://youtu.be/CUkZfD3PsT4",
    posterUrl:
      "https://fr.web.img4.acsta.net/pictures/23/02/01/11/19/2467300.jpg",
    description:
      " Un juge respecté à la Nouvelle Orléans, se retrouve face à un choix impossible lorsque son fils commet un délit de fuite après avoir causé un accident impliquant le fils d'un parrain de la pègre....",
  },
  {
    id: uuidv4(),
    title: "  Mayor of Kingstown",
    rating: 3,
    trailer: "https://youtu.be/zhmIVF2dTbI",
    posterUrl: "https://posterspy.com/wp-content/uploads/2023/01/mayor.jpg",
    description:
      " Kyle, le plus jeune des fils McLusky, est inspecteur au sein du département de police de Kingstown.",
  },

  {
    id: uuidv4(),
    title: "The Ark",
    rating: 2,
    trailer: "https://youtu.be/mFBJwIGazjQ",
    posterUrl:
      "https://fr.web.img6.acsta.net/pictures/23/01/05/11/22/1442425.jpg",
    description:
      " A hundred years in the future, the spacecraft known as Ark One suffers a catastrophic event one year from reaching its destination, Proxima b, causing massive destruction and loss of life. The remaining crew must work together to stay on course, and survives. ",
  },
  {
    id: uuidv4(),
    title: "The Watchful Eye",
    rating: 5,
    trailer: "https://youtu.be/1cXtgmULi5s",
    posterUrl:
      "https://fr.web.img2.acsta.net/pictures/22/12/15/12/16/5352440.jpg",
    description:
      " The Watchful Eye is an American drama mystery thriller television series created by Julie Durk that premiered on Freeform on January 30, 2023.",
  },
]);

const [titleSearch, setTitleSearch] = useState("");
const [ratingSearch, setRatingSearch] = useState(1);
const [filtredMovies,setFiltredMovies]=useState(movies) 

useEffect(()=>{
  setFiltredMovies(
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleSearch.toLowerCase())&& movie.rating>=ratingSearch
    ))},
    [titleSearch,movies,ratingSearch])
 
  

  return (
    <div className="App">
<Filter setMovies={setMovies} movies={movies} setTitleSearch= {setTitleSearch} setRatingSearch={setRatingSearch}/>

<Routes>
<Route path="/movie/:id" element={<MovieDetails movies={movies}/>}/>
<Route path="/" element ={ <MovieList movies={filtredMovies}/>}/>



</Routes>



</div>
  );
}

export default App;
