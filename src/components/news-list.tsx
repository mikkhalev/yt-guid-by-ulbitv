import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import NewsItem from "./news-item";

interface NewsItems {
    id:number | string,
    title:string,
    text:string
}
const NewsList = ({news, remove, postError}:any) => {

    function renderItems(news:Array<NewsItems>) {
        if (news.length !== 0) {
            return (
                news.map((item, index) =>
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="news"
                    >
                        <NewsItem remove={remove} content={item} number={index+1} />
                    </CSSTransition>
                )
            )
        }else if (postError) {
            return(
                <CSSTransition
                    timeout={600}
                    classNames="news"
                >
                    <p>postError</p>
                </CSSTransition>
            )
        } else {
            return(
                <CSSTransition
                    timeout={600}
                    classNames="news"
                >
                    <p>Новостей нет</p>
                </CSSTransition>
            )
        }
    }
    return (
        <div className="news-list">
            <TransitionGroup>
                {
                    renderItems(news)
                }
            </TransitionGroup>
        </div>
    );
};

export default NewsList;