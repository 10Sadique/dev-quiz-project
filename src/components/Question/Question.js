import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SingleOption from '../SingleOption/SingleOption';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ question }) => {
    const { id, correctAnswer, options } = question;

    const handleOption = (e) => {
        if (e.target.value === correctAnswer) {
            toast.success('Correct Answer!', {
                style: {
                    borderRadius: '20px',
                    backgroundColor: '#16a34a',
                    boxShadow: 'none',
                    color: '#f5f5f5',
                },
            });
        } else {
            toast.error('Wrong Answer!', {
                style: {
                    borderRadius: '20px',
                    backgroundColor: '#e11d48',
                    boxShadow: 'none',
                    color: '#f5f5f5',
                },
            });
        }
    };

    const handleCorrectAns = () => {
        toast(`Correct Answer: ${correctAnswer}`, {
            icon: '✅',
            style: {
                boxShadow: 'none',
                borderRadius: '20px',
                fontWeight: '600',
            },
        });
    };

    return (
        <div className="bg-gray-light/50 p-4 lg:p-12 rounded-lg shadow-md shadow-gray-light/30">
            <div className="text-light mb-5">
                <span className="font-bold">Q:&nbsp;</span>
                {question.question
                    .split('<p>')
                    .join(' ')
                    .split('</p>')
                    .join(' ')
                    .split('&nbsp;')
                    .join(' ')}
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {options.map((option, idx) => (
                        <SingleOption
                            key={idx}
                            id={id}
                            handleOption={handleOption}
                            option={option}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
                <span>Correct Answer:</span>
                <button onClick={handleCorrectAns}>
                    <EyeIcon className="h-5 w-5 hover:text-lime transition-all duration-300" />
                </button>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Question;
