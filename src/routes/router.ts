import About from "../pages/about";
import NewsPage from "../pages/news";
import NewsItemPage from "../pages/newsItemPage";

export const routes = [
    {path: '/about', component: About},
    {path: '/news', component: NewsPage},
    {path: '/news/:id', component: NewsItemPage},
]