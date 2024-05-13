import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../../Layout/Header';

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
    });

    useEffect(() => {
        console.log({ slug });
    }, [slug]);
    return (
        <>
            {/* <Header /> */}
            <div className="mt-[100px]">
                <h1 className="text-4xl text-white">{post.title}</h1>
            </div>
        </>
    );
};
