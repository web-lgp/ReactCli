import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from "./pages/About"
//路由懒加载
const Home = lazy(() => import(/* webpackChunkName: "home" */"./pages/Home"))
const About = lazy(() => import(/* webpackChunkName: "about" */"./pages/About"))

export default function App() {
    return (
        <div>
            <h1>Hello 李国鹏**</h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Suspense fallback={<div className='home-title'>loading....</div>}>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Suspense>
        </div>
    );
}