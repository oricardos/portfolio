import { Section } from '../../Layout/Section';
import { SectionTitle } from '../../Text/SectionTitle';
import { Card } from '../../Card';
import styles from './Learning.module.css';

import Python from '../../../assets/logos/python.svg';
import Django from '../../../assets/logos/django.svg';
import Ui from '../../../assets/logos/ui.svg';
import Ux from '../../../assets/logos/ux.svg';

export const Learning = () => {
  const learning = [
    {
      name: 'UI Design',
      logo: Ui,
    },
    {
      name: 'UX Design',
      logo: Ux,
    },
    {
      name: 'Python',
      logo: Python,
    },
    {
      name: 'Django',
      logo: Django,
    },
  ];
  return (
    <Section bg>
      <div className={styles.wrapper}>
        <SectionTitle title="Estudando" />

        <Card content={learning} />
      </div>
    </Section>
  );
};
