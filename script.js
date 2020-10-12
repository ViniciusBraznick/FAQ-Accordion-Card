const question = document.querySelectorAll('.question-item')

question.forEach(question => {
    question.addEventListener('click' , () =>{
        if (question.className == 'question-item question-item-active') {
            question.classList.remove('question-item-active')
        } else {
            removeClass()
            question.classList.add('question-item-active')
        }
    })
});

function removeClass() {
    question.forEach(question => {
        question.classList.remove('question-item-active')
});
}