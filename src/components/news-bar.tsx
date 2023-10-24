import React from 'react';
import Select from "./UI/select/select";
import Input from "./UI/input/input";

const NewsBar = ({filter, setFilter}:any) => {
    return (
        <div className="news-bar">
            <Select
                value={filter.sort}
                onChange={(selectedSort:string) => setFilter({...filter, sort: selectedSort})}
                defaultValue={"--Сортировать по--"}
                options={[
                    {value: "title", name: "По названию"},
                    {value: "text", name: "По содержимому"}
                ]}
            />
            <Input
                value={filter.query}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск новостей"
            />
        </div>
    );
};

export default NewsBar;