import { useEffect, useState } from 'react';
import axios from 'axios';
import { SectionTitle } from '../../Text/SectionTitle';
import styles from './Blog.module.css';
import { Section } from '../../Layout/Section';
import { LastPost } from '../../LastPost';

export const Blog = ({ limited }) => {
    const [posts, setPosts] = useState([]);
    const [lastPost, setLastPost] = useState();
    const xmlUrl = 'https://dev.to/api/articles?username=oricardos';

    const getPostsApi = async () => {
        await axios
            .get(xmlUrl)
            .then((response) => {
                setPosts(response.data);
                setLastPost(response.data[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getPostsApi();
    }, []);

    useEffect(() => {
        console.log(posts)
    }, [posts])


    return (
        <Section>
            <div className={styles.wrapper}>
                <SectionTitle title="Blog" />
                {lastPost ? <LastPost post={lastPost} /> : null}
            </div>
        </Section>
    );
};
