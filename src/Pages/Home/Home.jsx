import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from '../../Api/apiService';
import Loader from 'components/Loader/Loader';

function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Home;
