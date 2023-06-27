import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../Api/apiService';
import css from './Cast.module.css';

function Cast() {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCastList(data.cast));
  }, [movieId]);

  return (
    <ul className={css.cast}>
      {castList.map(({ id, name, character, profile_path }) => (
        <li key={id} className={css.list}>
          <div className={css.image}>
            <img
              className={css.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : ` https://i.ibb.co/GnTBvhB/no-img.jpg`
              }
              alt={name}
            />
          </div>
          <h3>{name}</h3>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
}
export default Cast;
