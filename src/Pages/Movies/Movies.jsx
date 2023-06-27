import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovies } from '../../Api/apiService';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    getMovies(query).then(data => {
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [query]);

  function hadleSubmit(evt) {
    evt.preventDefault();
    const searchForm = evt.target;
    setSearchParams({ query: searchForm.elements[0].value });
    searchForm.reset();
  }

  return (
    <main>
      <form onSubmit={hadleSubmit}>
        <input type="text" placeholder="Search movie" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <ul>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
export default Movies;
