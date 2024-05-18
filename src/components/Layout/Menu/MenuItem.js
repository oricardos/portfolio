// import style from './Menu.module.css';

import { Link } from 'react-router-dom';

export const MenuItem = ({ text, link }) => {
    return (
        <li className="ml-4">
            <Link to={link}>{text}</Link>
        </li>
    );
};
