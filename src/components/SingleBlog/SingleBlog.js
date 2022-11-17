import React from 'react';

const SingleBlog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className="space-y-5 bg-gray-light text-light p-5 rounded-lg shadow-md shadow-gray-light/30">
            <h1 className="space-x-3 font-bold text-xl text-lime">
                <span>Q:</span>
                <span>{question}</span>
            </h1>
            <div className="space-x-3">
                <span className="font-bold underline">Answer:</span>
                <span className="text-gray-300 space-y-2">
                    {answer.map((ans, idx) => (
                        <span key={idx}>
                            {ans}
                            <span className="block h-[1px] py-1"></span>
                        </span>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default SingleBlog;
