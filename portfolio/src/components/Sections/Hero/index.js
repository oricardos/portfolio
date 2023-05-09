import { MainTitle } from '../../Text/MainTitle';
import { Summary } from '../../Text/Summary';
import { Links } from '../../Links';
import styles from './Hero.module.css';
import { Section } from '../../Layout/Section';

export const Hero = () => {
    return (
        <Section>
            <div className={`${styles.wrapper} flex gap-x-6 items-center`}>
                <div>
                    <MainTitle />
                    <Summary />
                    <Links />
                </div>

                <img
                    className={styles.imgHero}
                    src="https://avatars.githubusercontent.com/u/46203839?v=4"
                    alt=""
                />
            </div>
        </Section>
    );
};
