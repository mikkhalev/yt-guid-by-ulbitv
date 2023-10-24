import React from 'react';
import '../css/news-item.css'
import Button from "./UI/button/button";
import {useNavigate} from "react-router-dom";
const NewsItem = (props:any) => {
    const navigate = useNavigate()
    return (
        <div className="news-list-item">
            <div>
                <h3>
                    {props.content.id}
                </h3>
                <h3>
                    {props.content.title}
                </h3>
                <span>
                    {props.content.text}
                </span>
            </div>
            <Button onClick={() => props.remove(props.content.id)}> Del </Button>
            <Button onClick={() => navigate('/news/' + props.content.id)}>view</Button>
        </div>
    );
};

export default NewsItem;