import React from 'react';
import Header from "../components/header";
import SimpleCounter from "../components/simple-counter";
import News from "../components/news";
import Footer from "../components/footer";
import '../css/app.css';
const NewsPage = () => {
    return (
        <div className="app">
            <main>
                <div className="box simple-counter-box">
                    <div className="box-content">
                        <SimpleCounter />
                    </div>
                </div>
                <div className="box news-wrapper">
                    <News>
                        Новости
                    </News>
                </div>
            </main>
        </div>
    );
};

export default NewsPage;