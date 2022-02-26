import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react'
import { activeUser } from '../redux/action';
import { useSelector, useDispatch} from 'react-redux';
const FormPopup = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const closeTooltip = () => ref.current.close();
    const {users} = useSelector(state=> state.usersReducer);
    const {user} = useSelector(state=>state.activeUserReducer);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [invalidLogin, setInvalidLogin] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    function submitFunc(e) {
        e.preventDefault();
        users.map((user)=>{
            if (user.login === login && user.password === password) {
                localStorage.setItem('activeUser', JSON.stringify(user));
                dispatch(activeUser(JSON.parse(localStorage.getItem('activeUser'))));
            }
        });
        let i1 = users.some((user)=>user.login===login);
        let i2 = users.some((user)=>user.password===password);
        if(!i1) {
            setInvalidLogin(true);
        }else {
            setInvalidLogin(false);
        }
        if(!i2) {
            setInvalidPassword(true);
        }else {
            setInvalidPassword(false);
        }
        if(i1 && i2) {
            setLogin('');
            setPassword('');
            closeTooltip();
        }
    }
    function logOut() {
        dispatch(activeUser({}));
        closeTooltip();
    }
    return (
        <div>
            {
                !user.login ?
                <Popup ref={ref} trigger={<button className='enter_btn'>Вход</button>} position="bottom right">
                    <div>
                        <form onSubmit={submitFunc}>
                            <input className={`registration_input ${invalidLogin ? 'error':''}`} value={login} onChange={(e) => setLogin(e.target.value)} name='login' type='text' placeholder='логин' />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className={`registration_input ${invalidPassword ? 'error':''}`} name='password' type='password' placeholder='пароль' />
                            <button 
                                className='registration_btn'   
                            >
                                Вход
                            </button>
                        </form>
                    </div>
                </Popup>
                :
                <Popup ref={ref} trigger={
                    <div className='enter_btn navbar_user-accaunt'>
                        <div className='avatar'>
                            {user.login.slice(0,1)}
                        </div>
                        <div className='user-login'>
                            {user.login}
                        </div>
                    </div>
                } position="bottom right">
                    <button onClick={logOut} className='registration_btn logout_btn'>Выход</button>
                </Popup>
            }
            
        </div>
    );
}
export default FormPopup;