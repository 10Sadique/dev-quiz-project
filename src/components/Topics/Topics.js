import React from 'react';
import TopicCard from '../TopicCard/TopicCard';

const Topics = ({ topics }) => {
    return (
        <div className="mt-10">
            <h1 className="font-bold text-light text-2xl text-center  mb-14">
                Quiz topics <span className="text-lime">DevQuiz</span> offers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5">
                {topics.map((topic) => (
                    <TopicCard key={topic.id} topic={topic} />
                ))}
            </div>
        </div>
    );
};

export default Topics;
