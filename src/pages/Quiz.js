import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../components/Questions/Questions';

const Quiz = () => {
    const topic = useLoaderData();
    const { total, name, questions } = topic.data;

    return (
        <div className="mx-6 my-14 md:mx-20 md:my-20">
            <div>
                <h1 className="text-2xl font-bold text-light text-center">
                    Participate in the <span className="text-lime">{name}</span>{' '}
                    quiz.
                </h1>
            </div>
            <Questions total={total} questions={questions} />
        </div>
    );
};

export default Quiz;
