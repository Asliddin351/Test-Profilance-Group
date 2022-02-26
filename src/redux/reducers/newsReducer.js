export function newsReducer(state={
    news: JSON.parse(localStorage.getItem('news')) ? JSON.parse(localStorage.getItem('news')) : [
        {
            id:1,
            title: 'Президент посетил дом-интернат «Мурувват» в Нукусе',
            text: 'Пять лет назад, в 2017 году глава государства в ходе визита в Каракалпакстан совершил внезапный визит в нукусский дом «Мурувват». Сегодня президент ознакомился с состоянием дел в том же самом интернате.',
            date: '25.02.2022',
            allow: true,
            author:'first_user'
        },
        {
            id:2,
            title: '12-летний Хайитали: «Я построил из Tico самосвал, грузоподъемностью в 2,5 тонны»',
            text: 'В Пахтаабадском районе Андижана механик-любитель превратил микролитражку Tico в самосвал, грузоподъемностью в 2,5 тонны. Интересно, что автору этого изобретения Хайитали Орифжонову – всего 12 лет.',
            date: '22.02.2022',
            allow: false,
            author:'first_user'
        },
        {
            id:3,
            title: 'Начиная со следующего месяца в Узбекистане водители могут ездить без прав, доверенности и страховки',
            text: 'Президент подписал закон «О внесении изменений и дополнений в Кодекс Республики Узбекистан об административной ответственности в связи с либерализацией административных взысканий за совершение некоторых правонарушений в транспортной и финансовой сферах».',
            date: '21.02.2022',
            allow: true,
            author:'second_user'
        },
        {
            id:4,
            title: 'Среди клиентов банка Credit Suisse нашли жену Ачилбая Раматова и бывшего сотрудника СНБ',
            text: 'В крупнейшем швейцарском банке Credit Suisse произошла самая масштабная утечка клиентских данных в истории. Среди клиентов обнаружили и узбекистанцев. Оказалось, что жена первого заместителя премьер-министра Узбекистана имела счет в банке. Как только ее заподозрили в отмывании денег, счет закрыли. Бывший сотрудник СНБ, которого Ислам Каримов наградил орденом «Дустлик», имел 3 млн долларов.',
            date: '21.02.2022',
            allow: false,
            author:'first_user'
        },
        {
            id:5,
            title: 'В пресс-службе Алишера Усманова прокомментировали расследование OCCRP в отношении сестры предпринимателя',
            text: 'В крупнейшем швейцарском банке Credit Suisse произошла самая масштабная утечка клиентских данных в истории. Среди клиентов обнаружили и узбекистанцев.',
            date: '22.02.2022',
            allow: true,
            author:'second_user'
        }
    ]
},action){
    switch(action.type){
        case 'delete_news': 
            let news = [...state.news];
            news.splice(action.payload, 1);
            localStorage.setItem('news', JSON.stringify(news));
            state={
                ...state,
                news: JSON.parse(localStorage.getItem('news'))
            }
            break;
        case 'change_approve': 
            let news1 = [...state.news];
            news1[action.payload].allow=!state.news[action.payload].allow;
            localStorage.setItem('news', JSON.stringify(news1));
            state ={
                ...state,
                news: JSON.parse(localStorage.getItem('news'))
            }
            break;
        case 'add_news': 
            let news2 = [...state.news];
            news2.push(action.payload);
            localStorage.setItem('news', JSON.stringify(news2));
            state ={
                ...state,
                news: JSON.parse(localStorage.getItem('news'))
            }
            break;
    }
    return state;
}