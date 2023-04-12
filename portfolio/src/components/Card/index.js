import styles from "./Card.module.css";

export const Card = ({ content }) => {
  return (
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
  );
};
