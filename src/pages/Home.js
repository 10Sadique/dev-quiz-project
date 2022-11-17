import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Topics from '../components/Topics/Topics';

const Home = () => {
    const topics = useLoaderData();

    return (
        <div className="mx-6 my-14 md:mx-20 md:mb-20 md:mt-32">
            <Hero />
            <Topics topics={topics.data} />
        </div>
    );
};

export default Home;
