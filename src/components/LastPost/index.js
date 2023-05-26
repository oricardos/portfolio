import styles from './LastPost.module.css';

export const LastPost = ({ post }) => {
    return (
        <article className={styles.lastPost}>
            <div className={styles.image}>
                <img
                    className={styles.img}
                    src={post.cover_image}
                    alt="Post Cover"
                />
            </div>
            <div className={styles.content}>
                <div>
                    <span>{post.readable_publish_date}</span>
                    <h2 className={styles.title}>{post.title}</h2>
                    {post.tag_list.map((tag, index) => (
                        <a
                            href={`https://dev.to/t/${tag}`}
                            key={index}
                            className={styles.tags}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {tag}
                        </a>
                    ))}

                    <p className={styles.description}>{post.description}</p>
                </div>
                <div className={styles.footer}>
                    <div className={styles.user}>
                        <img
                            className={styles.profilePicture}
                            src={post.user.profile_image_90}
                            alt="user Profile"
                        />
                        <p>{post.user.name}</p>
                    </div>
                    <div className={styles.read}>
                        {post.reading_time_minutes} min read
                    </div>
                </div>
            </div>
        </article>
    );
};
