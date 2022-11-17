import React from 'react';
import Question from '../Question/Question';

const Questions = ({ questions, total }) => {
    return (
        <div className="lg:p-14 rounded-2xl">
            <p className="mb-5 lg:mb-8 text-gray-400 text-center">
                Total {total} questions available.
            </p>
            <div className="space-y-5">
                {questions.map((question, idx) => (
                    <Question key={idx} question={question} />
                ))}
            </div>
        </div>
    );
};

export default Questions;
