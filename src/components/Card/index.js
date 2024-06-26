import { useState, useContext } from 'react';

import styles from './Card.module.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export const Card = ({ content }) => {
    const [position, setPosition] = useState(0);
    return (
        <div
            className={
                styles.wrapper +
                ' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
            }
        >
            {content.map((skill, index) => (
                <div
                    className={styles.card + ' w-[180px] h-[180px]'}
                    key={index}
                >
                    <div className={styles.cardBody}>
                        <img src={skill.logo} alt={skill.name} />
                        <p className={styles.cardText}>{skill.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

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
