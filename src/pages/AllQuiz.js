import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../components/Topics/Topics';

const AllQuiz = () => {
    const topics = useLoaderData();

    return (
        <div className="mx-6 my-10 md:mx-20 md:my-20">
            <Topics topics={topics.data} />
        </div>
    );
};

export default AllQuiz;
