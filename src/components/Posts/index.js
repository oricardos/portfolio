import { Link } from 'react-router-dom';
import styles from './Posts.module.css';
import { formattedDate } from '../../utils/formattedDate';

export const Posts = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {posts.map((post, index) => (
                <article key={index} className={styles.post}>
                    <Link to={`/blog/${post.slug}`} state={{ id: post.id }}>
                        <img
                            className={styles.img}
                            src={post.cover_image}
                            alt="cover post"
                        />
                    </Link>
                    <span className={styles.date}>
                        {formattedDate(post.published_at)}
                    </span>
                    <Link to={`/blog/${post.slug}`} state={{ id: post.id }}>
                        <h2 className={styles.title}>{post.title}</h2>
                    </Link>

                    <Link to={`/blog/${post.slug}`} state={{ id: post.id }}>
                        <p className={styles.description}>{post.description}</p>
                    </Link>
                </article>
            ))}
        </div>
    );
};
