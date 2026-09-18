document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = Array.from(document.querySelectorAll('#list input[type="checkbox"]'));
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    const resultBox = document.getElementById('score-result');
    const thankYouMessage = document.getElementById('thank-you-message');
    const quizOnlyElements = Array.from(document.querySelectorAll('.quiz-only'));
    const introText = document.querySelector('.intro-text');
    const originalIntroHTML = introText ? introText.innerHTML : '';

    function calculateScore() {
        const done = checkboxes.filter((box) => box.checked && !box.disabled).length;
        return 100 - done;
    }

    function getScoreMessage(score) {
        if (score >= 90) {
            return 'Awwww look at you. You’re so cute! Between your two-parent household and your religious background, you’ve really maintained a purity like nobody else. Good luck with the next Papal election!';
        }
        if (score >= 73) {
            return 'You’re not a very fun hang, but that’s okay. Everybody still wants you around because you have a steady presence and a submissive attitude. Remember to assert yourself a little bit next time: when you see a car, yell shotgun! When you want gross-ass Chipotle instead of Cabo, stand your ground. You’re a flower yet bloomed, my child.';
        }
        if (score >= 50) {
            return 'A perfectly quaint score! Your angel and devil are always fighting, and after dying you will certainly go to purgatory. Nothing is particularly special about you, except for your mixed political opinions.';
        }
        if (score >= 30) {
            return 'Mmm someone’s been bad. I can tell you ignore all those HlthyHrns messages just by looking at you. Are you gonna teach me a lesson? Come here and show me how impure you can get…';
        }
        if (score >= 20) {
            return 'Yikes. You’ve certainly been around the block. I’m a little concerned, but I’ll tell you what: nobody’s gonna steal your lunch money without getting a few STDs! Good luck with your 5th year of undergrad!';
        }
        if (score >= 10) {
            return 'Hey, come walk with me. Look, I know you had a tough childhood. Divorce hurts the kids the most. But there are resources out there for you, people you can talk to. You’re not alone, and I think it’s time you sought the help you need. In the meantime, please refrain from applying to the Texas Travesty — we really don’t need the baggage.';
        }
        return 'Hey Satan and Peter Thiel, thank you for taking our quirky quiz! If you liked it, please consider sparing the Texas Travesty during your subsequent dominion. We’d really appreciate it!';
    }

    function showScore() {
        const score = calculateScore();

        quizOnlyElements.forEach((el) => {
            el.style.display = 'none';
        });

        if (introText) {
            introText.innerHTML = getScoreMessage(score);
            introText.classList.add('score-message');
        }

        if (resultBox) {
            resultBox.innerHTML = `Your Score:<br><span class="score-number">${score}</span>`;
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

            if (introText) {
                introText.innerHTML = originalIntroHTML;
                introText.classList.remove('score-message');
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
