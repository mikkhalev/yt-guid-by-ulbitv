import {useState} from "react";

export const useFetching = (collback:any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchNews = async () => {
        try {
            setIsLoading(true)
            await collback()
        } catch (e:any) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetchNews, isLoading, error]
}