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
        <div>
            <Container>
                <div className="flex justify-center items-center h-[100px] min-h-full w-full">
                    <Logo />
                </div>
            </Container>
        </div>
    );
};
