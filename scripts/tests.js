const testsData = [
    {
        testName: 'Середньовічна Європа',
        questions: [
            'У якому році відбулася битва при Гастінгсі?',
            'Коли було підписано Велику хартію вольностей (Magna Carta)?',
            'У якому році почалася Столітня війна?'
        ],
        answers: [
            ['1066', '1215', '1347', '1453'], // для першого питання
            ['1066', '1215', '1347', '1453'], // для другого питання
            ['1066', '1215', '1337', '1453'], // для третього питання
            [], [] // пусті масиви для вирівнювання структури
        ],
        correctAnswer: [0, 1, 2] // правильні відповіді для кожного питання
    },
    {
        testName: 'Давній світ',
        questions: [
            'Коли було засновано Рим (за легендою)?',
            'У якому році відбулася битва при Фермопілах?',
            'Коли Александр Македонський став царем?'
        ],
        answers: [
            ['753 до н.е.', '509 до н.е.', '1200 до н.е.', '27 до н.е.'],
            ['490 до н.е.', '480 до н.е.', '300 до н.е.', '146 до н.е.'],
            ['356 до н.е.', '336 до н.е.', '323 до н.е.', '300 до н.е.'],
            [], []
        ],
        correctAnswer: [0, 1, 1]
    },
    {
        testName: 'Новітня історія',
        questions: [
            'У якому році почалася Перша світова війна?',
            'Коли було скасовано рабство в США?',
            'У якому році сталася Жовтнева революція в Росії?',
            'Коли розпочалася Друга світова війна?'
        ],
        answers: [
            ['1905', '1914', '1918', '1939'],
            ['1804', '1865', '1890', '1900'],
            ['1905', '1914', '1917', '1921'],
            ['1929', '1935', '1939', '1945'],
            []
        ],
        correctAnswer: [1, 1, 2, 2]
    },
    {
        testName: 'Історія України',
        questions: [
            'Коли відбулася Хотинська битва?',
            'У якому році було проголошено Акт Злуки УНР і ЗУНР?',
            'Коли сталася Полтавська битва?'
        ],
        answers: [
            ['1492', '1621', '1709', '1848'],
            ['1918', '1919', '1921', '1939'],
            ['1654', '1709', '1794', '1812'],
            [], []
        ],
        correctAnswer: [1, 1, 1]
    },
    {
        testName: 'Доба Відродження',
        questions: [
            'У якому році Христофор Колумб відкрив Америку?',
            'Коли було завершено будівництво Сикстинської капели (фрески Мікеланджело)?',
            'У якому році Гутенберг винайшов друкарський верстат?'
        ],
        answers: [
            ['1453', '1492', '1519', '1607'],
            ['1492', '1512', '1527', '1600'],
            ['1440', '1455', '1470', '1485'],
            [], []
        ],
        correctAnswer: [1, 1, 0]
    }
];

const testForm = document.querySelector('.test__form'),
      testHeader = document.querySelector('.top__content__block h1');

renderTest();

function renderTest() {
    const testId = localStorage.getItem('test');
    const currentTest = testsData[testId];
    testHeader.innerHTML = currentTest.testName;
    for(let i = 0; i < currentTest.questions.length; i++) {
        testForm.innerHTML += `
                        <p>Питання #${i + 1}</p>
                        <p class="question__text">${currentTest.questions[i]}</p>
                        <input type="radio" id="q${i}a" name="q${i}" class= ${currentTest.correctAnswer[i] == 0 ? "correct" : ""}>
                        <label for="q${i}a">А. ${currentTest.answers[i][0]}</label>
                        <input type="radio" id="q${i}b" name="q${i}" class=${currentTest.correctAnswer[i] == 1 ? "correct" : ""}>
                        <label for="q${i}b">Б. ${currentTest.answers[i][1]}</label>
                        <input type="radio" id="q${i}c" name="q${i}" class= ${currentTest.correctAnswer[i] == 2 ? "correct" : ""}>
                        <label for="q${i}c">В. ${currentTest.answers[i][2]}</label>
        `
    }
}

