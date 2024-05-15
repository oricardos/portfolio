import { Link } from 'react-router-dom';
import style from './Logo.module.css';

export const Logo = () => {
    return (
        <>
            <Link to="/">
                <h1 className={style.logo}>oricardo.dev</h1>
            </Link>
        </>
    );
};
