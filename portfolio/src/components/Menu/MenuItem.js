import style from './Menu.module.css';

export const MenuItem = ({text}) => {
    return (
        <li className="ml-4">
            {text}
        </li>
    )
}