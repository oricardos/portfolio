import { Link } from 'react-router-dom';
import styles from './Posts.module.css';

export const Posts = ({posts}) => {
    return (
        <div className={styles.wrapper}>
            {posts.map((post, index) => (
                <article key={index} className={styles.post}>
                    <div>
                        <img className={styles.img} src={post.cover_image} alt="cover post" />
                    </div>
                    <span className={styles.date}>{post.readable_publish_date}</span>
                    <Link to={`/blog/${post.slug}`} state={{id: post.id}}>
                    <h2 className={styles.title}>{post.title}</h2>
                    </Link>
                    
                    <p className={styles.description}>{post.description}</p>
                </article>
            ))}
        </div>
    )
}