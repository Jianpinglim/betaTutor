// Load tutee questions from localStorage and add them to the tutor card container
const tutorCardContainer = document.querySelector('.card-container');

const tuteeQuestions = JSON.parse(localStorage.getItem('tuteeQuestions')) || [];

tuteeQuestions.forEach(question => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const topicElement = document.createElement('div');
    topicElement.classList.add('topic');
    topicElement.textContent = question.topic;

    const questionElement = document.createElement('p');
    questionElement.textContent = question.question;

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.textContent = 'Accept';

    newCard.appendChild(topicElement);
    newCard.appendChild(questionElement);
    newCard.appendChild(buttonElement);

    tutorCardContainer.appendChild(newCard);
});


document.addEventListener('DOMContentLoaded', function () {
    const acceptButtons = document.querySelectorAll('.button');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const card = this.closest('.card');
            const cardId = card.dataset.cardId;

            const removedCardIds = JSON.parse(localStorage.getItem('removedCardIds')) || [];
            removedCardIds.push(cardId);
            localStorage.setItem('removedCardIds', JSON.stringify(removedCardIds));

            card.remove();
        });
    });

    const removedCardIds = JSON.parse(localStorage.getItem('removedCardIds')) || [];
    removedCardIds.forEach(removedCardId => {
        const cardToRemove = document.querySelector(`[data-card-id="${removedCardId}"]`);
        if (cardToRemove) {
            cardToRemove.remove();
        }
    });
});



