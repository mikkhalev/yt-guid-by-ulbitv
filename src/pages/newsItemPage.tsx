import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import '../css/news-page.css'

interface CommentItems {
    id:number | string,
    name:string,
    email:string,
    body:string
}
const NewsItemPage = () => {
    const params = useParams()
    const [post, setPost] = useState({title: "", body: ""})
    const [comments, setComments] = useState<CommentItems[]>([])
    const [fetchNewsById, isPostsLoading, postError]:any = useFetching(async () =>{
        const news:any = await PostService.getById(params.id);
        setPost(news.data)
    })
    const [fetchNewsCommentsById, isCommentsLoading, CommentsError]:any = useFetching(async () =>{
        const comments:any = await PostService.getCommentsById(params.id);
        setComments(comments.data)
    })
    useEffect(() => {
        fetchNewsById(params.id)
        fetchNewsCommentsById(params.id)
    }, [])
    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <span>
                    Новость №{params.id}
                </span>
                <h1>
                    {post.title}
                </h1>
                <span>
                    {post.body}
                </span>
            </div>
            <div className="content-wrapper">
                <h3>
                    Комментарии:
                </h3>
                <div className="comments">
                    {
                        comments.map((item:any) =>
                            <div className="comment">
                                <h5>
                                    {item.id + " " + item.email}
                                </h5>
                                <h4>
                                    {item.name}
                                </h4>
                                <h5>
                                    {item.body}
                                </h5>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default NewsItemPage;