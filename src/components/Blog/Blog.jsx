import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>When should we use context API?</h1>
                <ul>
                    <li>When we need to update the state of multiple components simultaneously based on a single change in state.</li>
                    <li>When you want to create a theme or style context that can be used throughout your application</li>
                    <li>When you have data or state that needs to be accessed by multiple components at different levels of the component tree.</li>
                </ul>
            </div>
            <div>
                <h1>What is a custom hook?</h1>
                <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks. <br />

                    A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: <br />
                    <ul>
                        <li>A custom hook does not require a specific signature.</li>
                        <li>A software developer can choose what argument the custom hook has and what should the argument return.</li>
                        <li>A custom hook always starts with the name 'use'.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h1>What is useRef?</h1>
                <p>In React, useRef is a hook that allows you to create a mutable reference that persists across re-renders of your component. It can be used to reference an HTML element, store a value, or keep track of a previous value. <br />
                    useRef returns a plain JavaScript object with a .current property that can be assigned any value, similar to a mutable variable. The .current property will persist between re-renders of your component, allowing you to read and modify its value without triggering a re-render.</p>
            </div>
            <div>
                <h1>What is useMemo?</h1>
                <p>In React, useMemo is a hook that allows you to memoize the result of a function or computation, preventing unnecessary re-computations of expensive operations. It is useful when you have a function that takes some arguments and returns a value, and that function is called frequently, possibly with the same arguments. <br />
                    useMemo takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies that the function depends on. The value returned by the memoized function is cached and only recomputed if one of the dependencies changes.
                </p>
            </div>
        </div>
    );
};

export default Blog;