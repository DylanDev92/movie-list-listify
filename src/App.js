import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ShowInfo from './components/ShowInfo';

function App() {
  return (
    <div className="App">
      <Header/>

      <ShowInfo/>

      <SearchInput/>

      <Footer/>
    </div>
  );
}


export default App;
