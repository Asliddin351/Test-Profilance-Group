import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNews} from '../redux/action';
import {useState} from 'react';
function Home() {
    const {user} = useSelector(state=>state.activeUserReducer);
    const {news} = useSelector(state=> state.newsReducer);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    function createNews(e) {
        e.preventDefault();
        let date = new Date();
        dispatch(addNews({
            id: news.length+1,
            title,
            text,
            date:`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            author:user.login,
            allow:false
        }));
        setTitle('');
        setText('');
    }
    return <div className='home'>
        <h1 className='home_content'>Привет, {user.login?user.login: 'гость'}</h1>
        {user.login?
            <div className='home_container'>
                <div className='home_form'>
                    <h4>Создавать новые новости</h4>
                    <form onSubmit={createNews}>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className='registration_input ' placeholder='title' />
                        <textarea value={text} onChange={(e)=>setText(e.target.value)} className='registration_input '  placeholder='text'></textarea>
                        <button className='registration_btn'>создавать новости</button>
                    </form>
                </div>
                <div className='user-news news-list'>
                {
                    news.map((item)=> item.author===user.login ? <div key={item.id} >
                        <div className='news-list_news_card'>
                                    <h3 className='news_card_title'>{item.title}</h3>
                                    <p className='news_card_text'>{item.text}</p>
                                    <p className='news_card_date'>{item.date}</p>
                            </div>
                    </div>:'')
                }
                </div>
            </div>:''
        }
        
    </div>
}
export default Home;