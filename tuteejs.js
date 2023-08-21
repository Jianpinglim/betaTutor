const questionForm = document.getElementById('question-form');

questionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const topic = document.getElementById('topic').value;

    // Save the tutee question to localStorage
    const tuteeQuestions = JSON.parse(localStorage.getItem('tuteeQuestions')) || [];
    tuteeQuestions.push({ topic, question });
    localStorage.setItem('tuteeQuestions', JSON.stringify(tuteeQuestions));

    // Reset the form
    questionForm.reset();
});
