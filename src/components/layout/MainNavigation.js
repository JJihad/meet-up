import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/FavoritesContext';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}><Link to='/'>REACT MEETUPS</Link></div>
        <nav>
            <ul>
                <li><Link to='/'>All meetups</Link></li>
                <li><Link to='/new-meetup'>New meetup</Link></li>
                <li><Link to='/favorites'>
                    Favorites
                    <span class={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;