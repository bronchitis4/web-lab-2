const data = [
    {
        historyPeriods: "Київська русь",
        events: [
            "Заснування Києва",
            "Похід Олега на Київ (882)",
            "Перші походи русичів на Візантію (907)",
            "Правління Ігоря (912–945)",
            "Княгиня Ольга та реформи (945–964)",
            "Правління Святослава (964–972)"]
    },
    {
        historyPeriods: "Монгольська навала та Литва",
        events: [
            "Битва на Калці (1223)",
            "Монгольська навала на Русь (1237–1240)",
            "Захоплення Києва (1240)",
            "Утворення Золотої Орди (1243)",
            "Боротьба Данила Галицького (1253)",
            "Походи монголів у Європу (1241)"]
    },
    {
        historyPeriods: "Козацька доба",
        events: [
            "Поява козаків (XVI століття)",
            "Перша згадка про Запорізьку Січ (1556)",
            "Гетьман Петро Конашевич-Сагайдачний (1605–1622)",
        ]
    },
    {
        historyPeriods: "Національні рухи та автономія",
        events: [
            "Мазепа та повстання проти Московії (1708)",
            "Знищення Запорізької Січі (1775)"]
    },
    {
        historyPeriods: "Революції та боротьба за незалежність",
        events: [
            "Кирило-Мефодіївське братство (1846–1847)",
            "Селянські реформи в Російській імперії (1861)"]
    },

    {
        historyPeriods: "Сучасна історія",
        events: [
            "Проголошення незалежності України (1991)",
            "Помаранчева революція (2004)",
            "Революція Гідності (2013–2014)"]
    },
];


const eventsBlock = document.querySelector(".events__block");

function renderChronolody(data){
    eventsBlock.innerHTML="";

    let i = 0;
    
    while(i < data.length){
        eventList = [...data[i].events];

        
        eventList = data[i].events.map((item, i) => {
            return `<li data-num=${i} class="list__historical__events__item">${item}</li>` 
        }).join("");

        eventsBlock.innerHTML += `
         <div class="events__block__item">
                        <h1 class="events__header">${data[i].historyPeriods}:</h1>
                        <ul class="list__historical__events">
                        
                           ${eventList}
                        </ul>
                    </div>
        `
        i++;
    }
}

localStorage.setItem('test', '1');

renderChronolody(data);