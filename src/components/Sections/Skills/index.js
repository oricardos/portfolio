import { Card } from '../../Card';
import { Section } from '../../Layout/Section';
import { SectionTitle } from '../../Text/SectionTitle';
import styles from './Skills.module.css';

import HTML5 from '../../../assets/logos/html5.svg';
import Css from '../../../assets/logos/css3.svg';
import Figma from '../../../assets/logos/figma.svg';
import JS from '../../../assets/logos/js.svg';
import ReactJs from '../../../assets/logos/react.svg';
import ReactNative from '../../../assets/logos/reactnative.svg';
import Github from '../../../assets/logos/github.svg';

export const Skills = () => {
    const skills = [
        {
            name: 'HTML5',
            logo: HTML5,
        },
        {
            name: 'Css3',
            logo: Css,
        },
        {
            name: 'Figma',
            logo: Figma,
        },
        {
            name: 'JS',
            logo: JS,
        },
        {
            name: 'ReactJs',
            logo: ReactJs,
        },
        {
            name: 'ReactNative',
            logo: ReactNative,
        },
        {
            name: 'Github',
            logo: Github,
        },
    ];
    return (
        <Section>
            <div className={styles.wrapper}>
                <SectionTitle title="Skills" />

                <Card content={skills} />
            </div>
        </Section>
    );
};
