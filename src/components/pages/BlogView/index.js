import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../../Layout/Header';
import { formattedDate } from '../../../utils/formattedDate';

export const BlogView = () => {
    const { slug } = useParams();
    const location = useLocation();
    const { id } = location.state;
    const [post, setPost] = useState({});

    const getPostById = async () => {
        await axios
            .get(`https://dev.to/api/articles/${id}`)
            .then((response) => setPost(response.data));
    };

    useEffect(() => {
        getPostById();
    }, []);

    useEffect(() => {
        console.log({ post });
    }, [post]);

    return (
        <>
            <div className="mt-[100px] space-y-10">
                <div className="flex justify-between items-end">
                    <div className='flex gap-4 items-center'>
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

                <div dangerouslySetInnerHTML={{ __html: post.body_html }} className='space-y-5' />
            </div>
        </>
    );
};
