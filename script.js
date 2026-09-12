document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = Array.from(document.querySelectorAll('#list input[type="checkbox"]'));
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    const resultBox = document.getElementById('score-result');
    const thankYouMessage = document.getElementById('thank-you-message');
    const quizOnlyElements = Array.from(document.querySelectorAll('.quiz-only'));

    function calculateScore() {
        const done = checkboxes.filter((box) => box.checked && !box.disabled).length;
        return 100 - done;
    }

    function showScore() {
        const score = calculateScore();

        quizOnlyElements.forEach((el) => {
            el.style.display = 'none';
        });

        if (resultBox) {
            resultBox.innerHTML = `Your Score: <span class="score-number">${score}</span>`;
            resultBox.style.display = 'block';
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
        }
    }

    if (submitButton) {
        submitButton.addEventListener('click', showScore);
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            checkboxes.forEach((box) => {
                if (!box.disabled) {
                    box.checked = false;
                }
            });

            if (resultBox) {
                resultBox.textContent = '';
                resultBox.style.display = 'none';
            }

            if (thankYouMessage) {
                thankYouMessage.style.display = 'none';
            }

            quizOnlyElements.forEach((el) => {
                el.style.display = '';
            });
        });
    }

    const mainContent = document.getElementById('main-content');
    const privacyView = document.getElementById('privacy-view');
    const privacyLink = document.getElementById('privacy-policy-link');
    const privacyBackLink = document.getElementById('privacy-back-link');

    if (privacyLink && mainContent && privacyView) {
        privacyLink.addEventListener('click', (event) => {
            event.preventDefault();
            mainContent.style.display = 'none';
            privacyView.hidden = false;
        });
    }

    if (privacyBackLink && mainContent && privacyView) {
        privacyBackLink.addEventListener('click', (event) => {
            event.preventDefault();
            privacyView.hidden = true;
            mainContent.style.display = '';
        });
    }
});
