import React, { Component } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';

const router = createHashRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
    ]
  }
])

export default class App extends Component {
  render() {
    return <>
        <RouterProvider router={router}></RouterProvider>
    </>
  }
}