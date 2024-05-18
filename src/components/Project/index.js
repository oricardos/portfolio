import styles from './Project.module.css';

export const Project = ({ src, title, description, repo, demo, reverse }) => {
    return (
        <div className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.image}>
                <img
                    className={styles.img}
                    src={
                        src
                            ? src
                            : `https://placehold.co/1600x900?text=${title}`
                    }
                    alt="Project"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.buttons}>
                    <a href={repo} className={styles.repo}>
                        Repo
                    </a>
                    {demo ? (
                        <a href={demo} className={styles.demo}>
                            Demo
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
