import React, {useState} from 'react';
import '../css/news-form.css';
import Input from "./UI/input/input";
import Textarea from "./UI/textarea/textarea";
import Button from "./UI/button/button";
const NewsForm = ({onChange}:any) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('')
    function addNews(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const newNews ={
            id: Date.now(),
            title,
            text
        }
        onChange(newNews);
        setTitle('');
        setText('');
    }
    return (
        <div className='form-wrapper'>
            <span>
                Нампишите новость
            </span>
            <form>
                <Input
                    value={title}
                    type="text"
                    placeholder="Введите название"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <Textarea
                    value={text}
                    placeholder="Введите текст новой новости"
                    style={{marginTop: "10px"}}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                />
                <Button
                    onClick={addNews}
                >
                    Опубликовать
                </Button>
            </form>
        </div>
    );
};

export default NewsForm;