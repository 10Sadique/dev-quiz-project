import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="text-center flex items-center justify-center flex-col gap-4">
                <h1 className="font-black text-light text-9xl">404</h1>
                <h3 className="font-bold text-light text-3xl">
                    WE ARE SORRY, PAGE NOT FOUND!
                </h3>
                <p className="w-2/3 text-gray-400">
                    THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS
                    NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
                </p>
                <Link to="/">
                    <button className="font-semibold text-light bg-lime py-2 px-5 rounded-lg shadow-md shadow-lime/50 hover:bg-lime-accent/80 transition-all duration-300">
                        Back to DevQuiz
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
