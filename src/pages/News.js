import React from 'react';
import {useSelector} from 'react-redux';
import { useState } from 'react';

const News = () => {
    const {news} = useSelector(state=> state.newsReducer);
    const [newsClone, setNewsClone] = useState([...news]);
    function serachNews(searchVal) {
        let a = news.filter((item)=>{
            return item.title.toLowerCase().includes(searchVal.toLowerCase());
        });
        setNewsClone(a);
    }
    return <div className='news'>
        <div className='search'>
            <input onChange={(e)=>serachNews(e.target.value)} type='text' className='input search_input' placeholder='Search...' />
        </div>
        <div className='news-list'>
            {
                newsClone.map((item)=> item.allow ? <div key={item.id} >
                    <div className='news-list_news_card'>
                        <h3 className='news_card_title'>{item.title}</h3>
                        <p className='news_card_text'>{item.text}</p>
                        <p className='news_card_date'>{item.date}</p>
                        </div>
                </div>:'')
            }
        </div>
    </div>
}

export default News;