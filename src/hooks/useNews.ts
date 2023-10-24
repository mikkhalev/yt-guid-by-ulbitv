import {useMemo} from "react";

interface NewsItems {
    id:number | string,
    title:string,
    text:string
}
export const useSortedNews = (items:Array<NewsItems>, sort:string) => {

    const sortedNews = useMemo(() => {
        if (sort) {
            return [...items].sort((a:any, b:any) => a[sort].localeCompare(b[sort]))
        } else {
            return items
        }
    }, [sort, items])

    return sortedNews;
}

export const useNews = (items:Array<NewsItems>, sort:string, searchRequest:string) => {

    const sortedNews = useSortedNews(items, sort);

    const sortedAndSearchNews = useMemo(() => {
        return sortedNews.filter(items => items.title.toLowerCase().includes(searchRequest.toLowerCase()))
    }, [searchRequest, sortedNews])

    return sortedAndSearchNews;
}