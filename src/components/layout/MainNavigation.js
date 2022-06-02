import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>{" "}
            {/*  It will render like anchor tag but it will prevent browser send request but just parse url  */}
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>{" "}
            {/*  It will render like anchor tag but it will prevent browser send request but just parse url  */}
          </li>
          <li>
            <Link to="/favorites">
              Favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>{" "}
            {/*  It will render like anchor tag but it will prevent browser send request but just parse url  */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
