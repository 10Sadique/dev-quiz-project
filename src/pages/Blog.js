import React from 'react';

import SingleBlog from '../components/SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = [
        {
            id: '63458ed9908e45fe7c52acbf',
            question: 'What is the purpose of React Router?',
            answer: [
                'React Router is a library to for routing on React. It enables the navigation among different components in React Application, and allows changing browser URL without reloading the page, and keeps the UI sync with the URL.',
                'It is very useful for developing single page application. It is used to define multiple route in the application.',
            ],
        },
        {
            id: '63458ed91d6c8cc87791cac3',
            question: 'How does Context API works?',
            answer: [
                "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on.",
                "React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.",
            ],
        },
        {
            id: '63458ed9b0add47ad203456f',
            question: 'Write about useRef Hook.',
            answer: [
                "`useRef` is a React Hook that lets us reference a value that's not needed for rendering. useRef returns a `ref object` with a single `current property` initially set to the initial value you provided.",
                'On the next renders, `useRef` will return the same object. We can change its `current` property to store information and read it later. Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.',
            ],
        },
    ];

    return (
        <div className="mx-6 my-10 md:mx-20 md:my-20">
            <div className="space-y-10">
                {blogs.map((blog) => (
                    <SingleBlog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
