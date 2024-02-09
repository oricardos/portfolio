import { useEffect, useState } from 'react';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { Menu } from '../Menu';
import styles from './Header.module.css';

export const Header = () => {
    const [menuBackground, setMenuBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            const triggerHeight = 150; // altura em pixels que irá acionar o background

            if (scrollHeight > triggerHeight) {
                setMenuBackground(true);
            } else {
                setMenuBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={menuBackground ? styles.navBg : styles.nav}>
            <Container>
                <div className="flex justify-between items-center h-16 min-h-full w-full">
                    <Logo />
                    <Menu />
                </div>
            </Container>
        </div>
    );
};
