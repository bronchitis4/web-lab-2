const testBtns = document.querySelectorAll(".test__btn");

testBtns.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        localStorage.setItem('test', i);
        console.log(e);
    })
})