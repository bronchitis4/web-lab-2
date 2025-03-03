
const form = document.querySelector('.comment__form'),
      commentName = form.querySelector('.name__input'),
      commentText = form.querySelector('.comment__input');

const commentsList = document.querySelector('.comments__list');

const dataComments = [
    {name: 'Dmytro', text: 'Hello!'},
    {name: 'Vlad', text: 'Hi!'},
    {name: 'Ivan', text: 'Good day!'},
    {name: 'Oleg', text: 'Good morning!'},
    {name: 'Vlad', text: 'Good evening!'},
];

renderComments(dataComments);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = commentName.value,
          text = commentText.value;
    
    if(name.trim() != "" && text.trim() != "") {
        dataComments.unshift({name: name, text: text});
        commentName.value = commentText.value = "";
    } else {
        
        alert("Не всі поля записані!");
        return;
    }

    renderComments(dataComments);
});

function renderComments(comments) 
{
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        commentsList.innerHTML += `
            <div class="comment">
                <h3>${comment.name}</h3>
                <p>${comment.text}</p>
            </div>
        `
    })
}