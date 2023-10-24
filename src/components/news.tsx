import React, {useEffect, useMemo, useState} from 'react';
import NewsForm from "./news-form";
import '../css/news-list.css'
import '../css/news.css'
import Modal from "./UI/modal/modal";
import Button from "./UI/button/button";
import {useNews} from "../hooks/useNews";
import NewsList from "./news-list";
import NewsBar from "./news-bar";
import PostService from "../API/PostService";
import Loader from "./UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount, paginationArray} from "../utils/pagesCount";
import Pagin from "./UI/pagination/pagin";


const News = ({children}:any) => {
    interface NewsItems {
        id:number | string,
        title:string,
        text:string
    }
    const [items, setItems] = useState<NewsItems[]>([
        // {id: 1, title: "Борис 1", text: "Алексей 1"},
        // {id: 2, title: "Владимир 1", text: "Борис 1"},
        // {id: 3, title: "Алексей 1", text: "Владимир 1"},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchNews = useNews(items, filter.sort, filter.query);
    //Отслеживание общего кол-во страниц
    const [totalCountPages, setTotalCountPages] = useState(0)
    //Отслеживание кол-во постов на странице
    const [limit, setLimit] = useState(10)
    //Отслеживаем номер страницы
    const [page, setPage] = useState(1)

    const [fetchNews, isPostsLoading, postError]:any = useFetching(async () =>{
        const news:any = await PostService.getAll(limit, page);
        setTotalCountPages(getPagesCount(news.headers['x-total-count'], limit))
        const formatResponse:any = [];
        for (let i = 0; i < news.data.length; i++) {
            formatResponse.push({id: news.data[i].id, title: news.data[i].title, text: news.data[i].body})
        }
        setItems(formatResponse)
    })
    const pagesArray:number[] = useMemo(()=> {
        return paginationArray(totalCountPages)
    }, [totalCountPages])

    const pageUpdate = (num:number) => {
        setPage(num)
    }

    useEffect(() => {
        fetchNews();
    }, [page])

    const getContent = (content:NewsItems) => {
        setItems([...items, content])
        setModal(false)
    }
    const delPost = (postId:number) => {
        setItems(items.filter(p => p.id !== postId))
    }


    return (
        <div className="news-list-wrapper" style={{display: 'flex', flexDirection: "row", justifyContent: "space-between",}}>
            <div style={{width: "100%"}}>
                <div className="news-header">
                    <h1>{children}</h1>
                    <Button onClick={() => setModal(true)}>
                        Создать новость
                    </Button>
                </div>
                <NewsBar
                    filter={filter}
                    setFilter={setFilter}
                />
                {
                    isPostsLoading
                    ? <Loader/>
                    : <NewsList
                        news={sortedAndSearchNews}
                        remove={delPost}
                        error={postError}
                    />
                }
                <div>
                    <Pagin
                        pages={pagesArray}
                        current={page}
                        setPage={pageUpdate}
                    />
                </div>

            </div>
            <Modal
                visible={modal}
                setVisible={setModal}
            >
                <NewsForm onChange={getContent}/>
            </Modal>
        </div>
    );
};

export default News;