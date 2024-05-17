import { useEffect, useState } from 'react';
import axios from 'axios';
import { SectionTitle } from '../../Text/SectionTitle';
import styles from './Blog.module.css';
import { Section } from '../../Layout/Section';
import { LastPost } from '../../LastPost';
import { Posts } from '../../Posts';
import { Skeleton } from '../../Skeleton';

export const Blog = ({ limited }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const xmlUrl = 'https://dev.to/api/articles?username=oricardos';

    const getPostsApi = async () => {
        setLoading(true)
        await axios
            .get(xmlUrl)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error(error);
                setError(true)
            }).finally(() => {
                setLoading(false)
            });

            setLoading(false)
    };

    useEffect(() => {
        getPostsApi();
    }, []);

    return (
        <Section>
            <div className={styles.wrapper}>
                <SectionTitle title="Blog" />
                {loading && <LoadingPost />}
                {!loading && error ? <div className='flex gap-[8px]'>
                    <p>Você pode acessar meu artigos em:</p>
                    <a className='text-yellow-500 font-bold hover:underline transition-all' href="https://dev.to/oricardos" target='_blank' rel="noopener noreferrer">dev.to/oricardos</a>
                </div> : null}
                
                {posts ? <Posts posts={posts} /> : null}
            </div>
        </Section>
    );
};

const LoadingPost = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3">
                <Skeleton className="h-[200px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-[240px]" />
            </div>
            <div className="flex flex-col gap-3">
                <Skeleton className="h-[200px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-[240px]" />
            </div>
            <div className="flex flex-col gap-3">
                <Skeleton className="h-[200px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-full" />
                <Skeleton className="h-[20px] rounded-lg w-[240px]" />
            </div>
        </div>
    );
};
