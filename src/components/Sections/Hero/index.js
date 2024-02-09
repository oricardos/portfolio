import { MainTitle } from '../../Text/MainTitle';
import { Summary } from '../../Text/Summary';
import { Links } from '../../Links';
import styles from './Hero.module.css';
import { Section } from '../../Layout/Section';
import Bg from '../../../assets/decs/bg.png';

export const Hero = () => {
    return (
        <Section bgImg={Bg}>
            <div className="h-screen flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="mt-20">
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
