import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieResult from "./components/MovieResult";
import SearchInput from "./components/SearchInput";
import ShowInfo from "./components/ShowInfo";

function App() {
  const [movieList, setList] = useState();

  const [search, setSearch] = useState()

  useEffect(() => {
    getList(search == "" ? "Avengers" : search);
  }, [search]);

  function getList(search) {
    console.log(process.env.REACT_APP_API_KEY);
    fetch(
      "http://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&s=" +
        search + ""
    ).then((x) => {
      x.json().then((json) => {
        console.log(json);
        setList(json.Search);
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <ShowInfo />
      <SearchInput setsearch={setSearch} />

      <div>
        {movieList?.map((x, id) => {
          return (
            <MovieResult key={id} title={x.Title} year={x.Year} type={x.Type} poster={x.Poster}/>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
