import styles from './Posts.module.css';

export const Posts = ({posts}) => {
    console.log(posts)

    return (
        <div className={styles.wrapper}>
            {posts.map((post, index) => (
                <article key={index} className={styles.post}>
                    <div>
                        <img className={styles.img} src={post.cover_image} alt="cover post" />
                    </div>
                    <span className={styles.date}>{post.readable_publish_date}</span>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.description}>{post.description}</p>
                </article>
            ))}
        </div>
    )
}