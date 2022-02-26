export function usersReducer(state={
    users:[
        {
            id:1,
            userName:'Mark',
            login:'first_user',
            password: '123456',
            
        },
        {
            id:2,
            userName:'Jacob',
            login:'second_user',
            password: '92372634'
        }
    ]
}){
    return state;
}