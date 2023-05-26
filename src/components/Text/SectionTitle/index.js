import styles from './SectionTitle.module.css';

export const SectionTitle = ({ title }) => {
  return <h2 className={`${styles.sectionTitle} mb-4`}>{title}</h2>;
};
