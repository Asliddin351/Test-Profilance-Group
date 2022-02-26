export function activeUserReducer(state={
    user:JSON.parse(localStorage.getItem('activeUser'))?JSON.parse(localStorage.getItem('activeUser')):{}
},action){
    switch(action.type){
        case 'active_user': 
            let user = action.payload;
            state={
                ...state,
                user:user
            }
            break;
    }
    return state;
}