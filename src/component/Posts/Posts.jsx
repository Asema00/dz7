import React from 'react';
import { Link, NavLink, Outlet, Route } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Post from "../Post/Post";

function Posts() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                <Link to={`/posts/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Outlet/>
                </>
            )}
        </div>
    );
}

export default Posts;