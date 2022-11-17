import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/hero.svg';

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3 md:mb-32">
                <div className="col-span-2 order-2 md:order-1">
                    <div>
                        <h1 className="text-lime font-bold text-5xl md:text-6xl lg:text-7xl">
                            Spin up your developing skills with{' '}
                            <span className="text-light">DevQuiz</span>
                        </h1>
                        <p className="my-10 lg:my-6 text-center md:text-left text-light md:w-3/5">
                            Take part on our topic-wise quizzes and enhance your
                            developing knowledge.
                        </p>
                        <div className="flex items-center justify-center md:block">
                            <Link to="/quiz">
                                <button className="bg-lime shadow-md shadow-lime/50 rounded-md text-light font-semibold py-2 px-5 hover:bg-lime-accent/80 transition-all duration-300">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full order-1 flex items-center justify-center mb-10 md:mb-0">
                    <img className="w-full" src={HeroImg} alt="hero section" />
                </div>
            </div>
        </>
    );
};

export default Hero;
