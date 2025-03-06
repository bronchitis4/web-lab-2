

const eventsData = [
    [ // 9 століття - Київська Русь
        { header: 'Заснування Києва', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Київ, за легендою, заснований Кием, Щеком, Хоривом і їхньою сестрою Либіддю.' },
        { header: 'Похід Олега на Київ (882)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Князь Олег об’єднав північні та південні землі, створивши Київську Русь.' },
        { header: 'Перші походи русичів на Візантію (907)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Князь Олег здійснив успішний похід на Візантію та підписав вигідний договір.' },
        { header: 'Правління Ігоря (912–945)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Князь Ігор продовжив зміцнення держави та воював з кочовиками.' },
        { header: 'Княгиня Ольга та реформи (945–964)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Ольга провела податкову реформу, вперше встановивши систему данини.' },
        { header: 'Правління Святослава (964–972)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Князь Святослав розширив територію Київської Русі та воював із Хазарами.' }
    ],
    [ // 13 століття - Монгольська навала
        { header: 'Битва на Калці (1223)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Перша зустріч русичів з монголами, закінчилася поразкою руських князів.' },
        { header: 'Монгольська навала на Русь (1237–1240)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Монголи під проводом Батия зруйнували Київ та інші міста.' },
        { header: 'Захоплення Києва (1240)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Монголи захопили та майже повністю знищили Київ.' },
        { header: 'Утворення Золотої Орди (1243)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Під владою Батия формується нова держава - Золота Орда.' },
        { header: 'Боротьба Данила Галицького (1253)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Данило Галицький коронований у Дорогичині як король Русі.' },
        { header: 'Походи монголів у Європу (1241)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Монголи вторглися до Польщі, Угорщини та Балкан.' }
    ],
    [ // 15 століття - Козацька доба
        { header: 'Поява козаків (XVI століття)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Формується козацтво як військова спільнота на півдні України.' },
        { header: 'Перша згадка про Запорізьку Січ (1556)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Князь Дмитро Вишневецький будує першу січ на острові Мала Хортиця.' },
        { header: 'Гетьман Петро Конашевич-Сагайдачний (1605–1622)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Козаки здійснюють походи проти Османської імперії та Московії.' }
    ],
    [ // 18 століття - Національні рухи та автономія
        { header: 'Мазепа та повстання проти Московії (1708)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Гетьман Іван Мазепа виступає проти Московії разом зі шведами.' },
        { header: 'Знищення Запорізької Січі (1775)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Росія ліквідує козацьку автономію.' }
    ],
    [ // 19 століття - Революції та боротьба за незалежність
        { header: 'Кирило-Мефодіївське братство (1846–1847)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Перше українське політичне товариство, що боролося за незалежність.' },
        { header: 'Селянські реформи в Російській імперії (1861)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Скасування кріпацтва в Україні.' }
    ],
    [ // 20 століття - Сучасна історія
        { header: 'Проголошення незалежності України (1991)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Україна офіційно проголошує незалежність від СРСР.' },
        { header: 'Помаранчева революція (2004)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Масові протести проти фальсифікації виборів президента України.' },
        { header: 'Революція Гідності (2013–2014)', urlImage: 'https://www.volynnews.com/files/news/2012/08-16/34241-1u.jpg', text: 'Протести проти проросійського курсу уряду, які призвели до зміни влади.' }
    ]
];

console.log(eventsData);

const eventList = document.querySelectorAll('.events__block__item');


eventList.forEach((item, index) => {
    item.addEventListener('click', (e)=> {
       if(e.target.tagName == 'LI'){
            console.log(e.target.getAttribute('data-num'))
            openModalWindow(eventsData[index][parseInt(e.target.getAttribute('data-num'))])
        }
    })
})

function openModalWindow(data) {
    document.body.style.overflow = 'hidden';
    const modalWindow = document.createElement('div');
    modalWindow.classList.add("background__modal__window");
    
    modalWindow.style.top = window.scrollY + 'px';
    modalWindow.innerHTML += `
        <div class="background__modal__window">
            <div class="modal__window">
                <div class="close__window__button"></div>
                <h1>${data.header}</h1>
                <img src=${data.urlImage} alt="modal window image" width="60%">
                <p>${data.text}</p>
            </div>
        </div>`
    document.body.append(modalWindow); 

    
    modalWindow.querySelector(".close__window__button")
        .addEventListener('click', (e) => {
            modalWindow.remove()
            document.body.style.overflow = 'auto';
        });
}




{/* <div class="background__modal__window">
        <div class="modal__window">
            <div class="close__window__button"></div>
            <h1>Header</h1>
            <img src="https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg" alt="modal window image" width="60%">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolore eius delectus sit harum quaerat repellendus officia sed ad non esse quos eos, reprehenderit fuga aut cumque autem accusantium quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at aut, enim, voluptas natus quia quis aspernatur vitae minima, voluptatum ullam dicta culpa tenetur sed distinctio recusandae saepe. Porro, dolores.</p>
        </div>
    </div> */}