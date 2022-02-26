import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { delteNews, changeApprove } from '../redux/action';
const Admin = () => {
    const {news} = useSelector(state=> state.newsReducer);
    const dispatch = useDispatch();
    return <div className='news'>
        <div className='news-list'>
            {
                news.map((item, index)=><div key={item.id} >
                    <div className='news-list_news_card'>
                                <h3 className='news_card_title'>{item.title}</h3>
                                <p className='news_card_text'>{item.text}</p>
                                <div className='news_card_footer'>
                                    <p className='news_card_date news_card_date1'>{item.date}</p>
                                    <div className='news_card_control'>
                                        <button onClick={()=>dispatch(changeApprove(index))} className='news_card_approve-btn'> {item.allow?'не одобрить':' одобрить'}</button>
                                        <button onClick={()=>dispatch(delteNews(index))} className='news_card_del-btn'> удалить</button>
                                    </div>
                                </div>
                        </div>
                </div>)
            }
        </div>
    </div>
}

export default Admin;