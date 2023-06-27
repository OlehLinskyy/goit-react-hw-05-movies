import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../Api/apiService';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const location = useLocation();
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
  } = movieDetail;
  console.log(movieDetail);
  const userScore = (vote_average * 10).toFixed();

  const relaseDates = release_date
    ? release_date.split('').slice(0, 4).join('')
    : '';

  return (
    <main className={css.main}>
      <button type="button" className={css.button_go_back}>
        <Link to={location.state?.from ?? '/'} className={css.link_go_back}>
          Go back
        </Link>
      </button>
      <div className={css.card}>
        <div className={css.image}>
          <img
            className={css.img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : ` https://i.ibb.co/GnTBvhB/no-img.jpg`
            }
            alt={original_title}
          />
        </div>
        <div>
          <h2 className={css.title}>
            {original_title}({relaseDates})
          </h2>
          <h3>User Score: {userScore}%</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.gengres}>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div className={css.additionalInformation}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default MovieDetails;
