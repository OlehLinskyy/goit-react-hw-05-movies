import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

function SharedLayout() {
  const handleActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'black',
      backgroundColor: isActive ? 'tomato' : '',
    };
  };
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink style={handleActiveStyle} to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink style={handleActiveStyle} to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default SharedLayout;
