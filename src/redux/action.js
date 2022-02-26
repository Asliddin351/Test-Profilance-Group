export function delteNews(newsIndex) {
    return {
        type:'delete_news',
        payload:newsIndex
    }
}
export function changeApprove(newsIndex) {
    return {
        type:'change_approve',
        payload:newsIndex
    }
}
export function addNews(news) {
    return {
        type:'add_news',
        payload:news
    }
}
export function activeUser(user) {
    return {
        type:'active_user',
        payload:user
    }
}