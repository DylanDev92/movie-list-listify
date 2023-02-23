import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieResult from './components/MovieResult';
import SearchInput from './components/SearchInput';
import ShowInfo from './components/ShowInfo';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShowInfo/>
      <SearchInput/>

      <MovieResult/>
      <MovieResult/>
      <MovieResult/>
      <MovieResult/>
      <MovieResult/>

      <Footer/>
    </div>
  );
}


export default App;
