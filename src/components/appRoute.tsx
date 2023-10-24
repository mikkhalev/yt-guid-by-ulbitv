import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/about";
import NewsPage from "../pages/news";
import NoPageError from "../pages/NoPageError";
import NewsItemPage from "../pages/newsItemPage";
import {routes} from "../routes/router";

const AppRoute = () => {
    return (
        <Routes>
            {
                routes.map((item:{path:string, component:any}) =>
                    <Route path={item.path} element={<item.component/>}/>
                )
            }
            <Route index element={<About />} />
            <Route path="*" element={<NoPageError/>} />
        </Routes>
    );
};

export default AppRoute;