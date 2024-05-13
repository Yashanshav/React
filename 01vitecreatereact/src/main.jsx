import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//this doesn't work as we have written this in our language, not in React's way
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "Click me to visit google"
}

// We can use Element like this if we want () means they will be looped through, but it is very confusing said by Hitesh
const AnotherElement = (
    <a href='https://www.google.com'> Visit Google</a>
)

// Best way to creat React Elements
// createElement method helps us to create html into objects
const areactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Visit Google by Yash'
)

function MyApp() {
    const username = "hitesh"
    return (
        <>
        <h1>username is {username}</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp/>
)
