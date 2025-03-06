
const locationButton = document.querySelector('.location__adress'),
      locationModalWindow = document.querySelector('.location__modal');


locationButton.addEventListener('mouseenter', (e) => {
    locationModalWindow.classList.remove('disable');
    locationModalWindow.addEventListener("mouseleave", (e) => {
        locationModalWindow.classList.add("disable");

    })
})

