import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compontens/Home/Home.jsx';
import About from './compontens/About/About.jsx';
import Contact from './compontens/Contact/Contact.jsx';
import Users from './compontens/Users/Users.jsx';
import UsersDetails from './compontens/UsersDetails/UsersDetails.jsx';
import Posts from './compontens/Posts/Posts.jsx';
import PostDetail from './compontens/PostDetail/PostDetail.jsx';
import ErrorPage from './compontens/ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
     {
      path: '/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
     },
     {
      path: '/user/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UsersDetails></UsersDetails>
     },
     {
      path:'/posts',
      loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
      element: <Posts></Posts>
     },
     {
      path: '/post/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetail></PostDetail>
     }
    ]
  },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
