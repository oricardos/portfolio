import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Header } from '../../Layout/Header';
import { formattedDate } from '../../../utils/formattedDate';

export const BlogView = () => {
    const { slug } = useParams();
    const location = useLocation();
    const { id } = location.state;
    const [post, setPost] = useState({});
    const [allPosts, setAllPosts] = useState([]);

    const getAllPosts = async () => {
        await axios
            .get('https://dev.to/api/articles?username=oricardos')
            .then((response) => setAllPosts(response.data))
            .catch((error) => {
                console.error('Erro ao buscar posts', error);
            });
    };

    const getPostById = async () => {
        await axios
            .get(`https://dev.to/api/articles/${id}`)
            .then((response) => setPost(response.data))
            .catch((error) =>
                console.error('Erro ao buscar o post atual', error)
            );
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        getPostById();
    }, [id]);

    if (!post || Object.keys(post).length === 0)
        return <div>Carregando...</div>;

    const currentIndex = allPosts.findIndex((p) => p.id === parseInt(id));

    const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost =
        currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    return (
        <>
            <div className="mt-[100px] space-y-10">
                <div className="flex justify-between items-end">
                    <div className="flex gap-4 items-center">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={post.user?.profile_image}
                            alt={post.user?.username}
                        />

                        <div className="flex flex-col gap-1">
                            <p className="font-bold">{post.user?.username}</p>
                            <p>{formattedDate(post.published_at)}</p>
                        </div>
                    </div>

                    <p>{post.reading_time_minutes} mins</p>
                </div>

                <h1 className="text-4xl text-white font-bold">{post.title}</h1>

                <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full rounded"
                />

                <div
                    dangerouslySetInnerHTML={{ __html: post.body_html }}
                    className="space-y-5"
                />
            </div>

            <div className="flex justify-between w-full mt-[100px] gap-[40px]">
                {previousPost && (
                    <Link
                        className="flex justify-start"
                        to={`/blog/${previousPost.slug}`}
                        state={{ id: previousPost.id }}
                    >
                        <div className="flex flex-col">
                            <img
                                className={`rounded-lg ${!nextPost ? 'max-w-[50%]' : ''}`}
                                src={previousPost.cover_image}
                                alt="article cover"
                            />
                            <h5 className='font-bold mt-3'>{previousPost.title}</h5>
                        </div>
                    </Link>
                )}
                {nextPost && (
                    <>
                        <Link
                        className="flex"
                        to={`/blog/${nextPost.slug}`}
                        state={{ id: nextPost.id }}
                    >
                        <div className="flex flex-col">
                            <img
                                className={`rounded-lg ${!previousPost ? 'max-w-[50%]' : ''}`}
                                src={nextPost.cover_image}
                                alt="article cover"
                            />
                            <h5 className='font-bold mt-3'>{nextPost.title}</h5>
                        </div>
                    </Link>
                    </>
                    
                )}
            </div>
        </>
    );
};
