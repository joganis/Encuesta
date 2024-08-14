document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', function() {
        const parentContainer = answer.parentElement;
        const explanation = document.createElement('div');
        explanation.classList.add('explanation');
        explanation.textContent = answer.dataset.explanation;

        if (answer.dataset.correct === 'true') {
            answer.style.backgroundColor = 'green';
            answer.style.color = 'white';
        } else {
            answer.style.backgroundColor = 'red';
            answer.style.color = 'white';
        }

        parentContainer.querySelectorAll('.answer').forEach(a => {
            a.removeEventListener('click', this);
        });

        parentContainer.appendChild(explanation);
    });
});