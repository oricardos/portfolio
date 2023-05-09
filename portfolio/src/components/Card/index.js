import { useState, useContext } from 'react';

import styles from './Card.module.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export const Card = ({ content }) => {
    const [position, setPosition] = useState(0);
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            <div className={styles.wrapper}>
                {content.map((skill, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardBody}>
                            <img src={skill.logo} alt={skill.name} />
                            <p className={styles.cardText}>{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollMenu>
    );
};

export const Arrow = ({ children, onClick, disabled }) => {
    return (
        <span
            role="button"
            tabIndex="0"
            onKeyDown={() => {}}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </span>
    );
};

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}
