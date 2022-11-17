import React from 'react';

const SingleOption = ({ handleOption, option, id }) => {
    return (
        <div className="bg-gray-dark rounded-lg hover:bg-lime hover:text-gray-light transition-all duration-300 font-semibold">
            <div className="w-full h-full flex p-3">
                <label
                    className="w-full h-full cursor-pointer flex items-center gap-4"
                    htmlFor={option}
                >
                    <input
                        className="h-4 w-4 text-lime focus:ring-transparent"
                        onClick={(e) => handleOption(e)}
                        type="radio"
                        value={option}
                        id={option}
                        name={id}
                    />

                    <span className="w-full">{option}</span>
                </label>
            </div>
        </div>
    );
};

export default SingleOption;
