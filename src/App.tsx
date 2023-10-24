import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import About from "./pages/about";
import NewsPage from "./pages/news";
import Header from "./components/header";
import NoPageError from "./pages/NoPageError";
import AppRoute from "./components/appRoute";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <AppRoute/>
        </BrowserRouter>
    );
};

export default App;