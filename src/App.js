import { useEffect, useState, useRef } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieResult from "./components/MovieResult";
import SearchInput from "./components/SearchInput";
import ShowInfo from "./components/ShowInfo";

function App() {
  const [movieList, setList] = useState();

  const myRef = useRef(null);

  const [search, setSearch] = useState("");

  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    getList(search == "" ? "Avengers" : search);
  }, [search]);

  function getList(search) {
    console.log(process.env.REACT_APP_API_KEY);
    fetch(
      "http://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&s=" +
        search +
        ""
    ).then((x) => {
      x.json().then((json) => {
        console.log(json);
        setList(json.Search);
      });
    });
  }

  return (
    <div className="App">
      <Header myRef={myRef} />
      <ShowInfo movieid={selectedMovie} />
      <SearchInput setsearch={setSearch} />

      <div>
        {movieList?.map((x, id) => {
          return (
            <MovieResult
              myRef={myRef}
              setmovie={setSelectedMovie}
              movieid={x.imdbID}
              key={id}
              title={x.Title}
              year={x.Year}
              type={x.Type}
              poster={x.Poster}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
