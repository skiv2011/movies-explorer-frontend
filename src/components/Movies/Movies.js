import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies () {
return (
  <>
    <Header 
      place="movies"
      isLogged={true}
    />
    <main>
    <SearchForm />
    <MoviesCardList />
  </main>
  <Footer />
</>
);
}
export default Movies;