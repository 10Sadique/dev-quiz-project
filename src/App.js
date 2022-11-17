import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import AllQuiz from './pages/AllQuiz';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Statistics from './pages/Statistics';

const topicsLoader = async () => {
    return fetch('https://openapi.programming-hero.com/api/quiz');
};
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: topicsLoader,
                element: <Home />,
            },
            {
                path: '/home',
                loader: topicsLoader,
                element: <Home />,
            },
            { path: '/quiz', loader: topicsLoader, element: <AllQuiz /> },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => {
                    return fetch(
                        `https://openapi.programming-hero.com/api/quiz/${params.id}`
                    );
                },
                element: <Quiz />,
            },
            { path: '/blog', element: <Blog /> },
            { path: '/stats', loader: topicsLoader, element: <Statistics /> },
        ],
    },
    { path: '*', element: <ErrorPage /> },
]);

const App = () => {
    return (
        <div className="font-monster">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
