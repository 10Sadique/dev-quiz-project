import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className="bg-gray-light shadow-lg shadow-gray-light/30 rounded-lg">
            <div className="p-3 md:p-2">
                <img
                    className="bg-gray-dark rounded-lg w-full"
                    src={logo}
                    alt={name}
                />
            </div>
            <div className="flex items-center justify-between gap-5 px-3 md:px-2 pb-3 md:pb-2">
                <div>
                    <h1 className="font-semibold text-xl text-light">{name}</h1>
                    <p className="text-gray-300/60 text-[12px]">
                        {total} questions
                    </p>
                </div>
                <div>
                    <Link to={`/quiz/${id}`}>
                        <button className="bg-lime py-2 px-5 md:px-3 text-sm font-semibold rounded-md shadow-md shadow-lime/50 hover:bg-lime-accent/80 transition-all duration-300">
                            Take Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;
