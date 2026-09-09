const categories = [
    {
        title: "Romance & Relationships",
        questions: [
            "Held hands romantically with someone",
            "Been on a date",
            "Had your first kiss",
            "Been in a relationship",
            "Said 'I love you' romantically to someone",
            "Made out with someone",
            "Kissed someone you met that same day",
            "Had a friends-with-benefits situation",
            "Been in love",
            "Had your heart broken",
            "Broken someone's heart",
            "Had a secret relationship",
            "Kissed more than one person in a 24-hour period",
            "Been caught in a love triangle",
            "Dated someone your parents disapproved of",
            "Had a long-distance relationship",
            "Cheated on a partner",
            "Been cheated on",
            "Had feelings for someone who was taken",
            "Kissed someone of the same gender",
            "Had a summer fling",
            "Been on a blind date",
            "Matched with someone on a dating app",
            "Met a romantic partner online",
            "Had a one-night stand",
        ],
    },
    {
        title: "Social Life & Parties",
        questions: [
            "Stayed up past 3 AM",
            "Pulled an all-nighter",
            "Been to a house party",
            "Been to a club or bar",
            "Danced on a table",
            "Danced with a complete stranger",
            "Sung karaoke in public",
            "Gone skinny dipping",
            "Played spin the bottle or 7 minutes in heaven",
            "Played a drinking game",
            "Had alcohol before the legal drinking age",
            "Been drunk",
            "Been drunk in public",
            "Had a hangover",
            "Thrown up from drinking",
            "Blacked out from alcohol",
            "Tried marijuana",
            "Tried any other recreational substance",
            "Smoked a cigarette",
            "Snuck into a place without paying",
            "Crashed a party you weren't invited to",
            "Hosted a party your parents didn't know about",
            "Had a party broken up by the police",
            "Snuck out of the house at night",
            "Done something deeply embarrassing in public",
        ],
    },
    {
        title: "School & Work",
        questions: [
            "Skipped a class or workday without permission",
            "Cheated on a test or assignment",
            "Plagiarized something",
            "Gotten a failing grade",
            "Fallen asleep in class or a meeting",
            "Gotten a detention or formal written warning",
            "Been sent to the principal's office or HR",
            "Gotten fired from a job",
            "Quit a job without giving notice",
            "Called in sick when you weren't",
            "Cried at school or work",
            "Had a crush on a teacher or professor",
            "Dated a coworker",
        ],
    },
    {
        title: "Legal & Risky",
        questions: [
            "Gotten a speeding ticket",
            "Been in a car accident you caused",
            "Driven while impaired",
            "Driven over 100 mph",
            "Shoplifted something",
            "Trespassed on private property",
            "Done something else illegal (minor offenses count)",
            "Been arrested or detained by police",
            "Been in a physical altercation",
            "Lied to police or another authority figure",
            "Used a fake ID",
            "Gambled for money",
        ],
    },
    {
        title: "Digital Life",
        questions: [
            "Sent a risky or regrettable text or photo",
            "Accidentally sent a message to the completely wrong person",
            "Ghosted someone you were dating or talking to",
            "Been ghosted by someone",
            "Slid into someone's DMs",
            "Had a relationship that existed entirely online",
            "Met someone from the internet in real life",
            "Been catfished",
            "Made a post or video that went viral",
            "Publicly called someone out on social media",
        ],
    },
    {
        title: "Life Experiences",
        questions: [
            "Lied to your parents about where you were",
            "Snuck someone into your home without permission",
            "Kept a significant secret from everyone for over a year",
            "Done something on a dare you normally never would",
            "Pretended to be someone you're not for an extended period",
            "Traveled alone to another country",
            "Hitchhiked",
            "Spent the night somewhere you weren't supposed to be",
            "Done something you still can't tell anyone about",
            "Done something that still makes you cringe years later",
            "Gotten genuinely lost somewhere unfamiliar alone at night",
            "Told a lie that had serious real-world consequences",
            "Done something purely out of spite",
            "Made a decision you deeply regret",
            "Done something your past self would be completely shocked by",
        ],
    },
];

const interpretations = [
    {
        min: 98,
        max: 100,
        label: "Pure Soul",
        desc: "An absolute angel. Either you've lived a very sheltered life, or you're fibbing just a little. Either way, we respect it.",
    },
    {
        min: 90,
        max: 97,
        label: "Pretty Pure",
        desc: "Mostly innocent with a sprinkle of adventure. You've dipped your toes in, but haven't jumped off the deep end.",
    },
    {
        min: 77,
        max: 89,
        label: "Mildly Experienced",
        desc: "You've got some stories to tell. You've lived a bit, learned a lot, and probably have at least one 'don't tell mom' moment.",
    },
    {
        min: 60,
        max: 76,
        label: "Well Experienced",
        desc: "You've clearly been around the block. Life has thrown things at you and you leaned into it. No shame in that.",
    },
    {
        min: 40,
        max: 59,
        label: "Quite the Character",
        desc: "You have *lived*. Your life story would make a compelling memoir — or at least a very entertaining podcast episode.",
    },
    {
        min: 20,
        max: 39,
        label: "Seasoned Veteran",
        desc: "You've seen things. Done things. Questionable things. Legendary things. You are not to be underestimated.",
    },
    {
        min: 0,
        max: 19,
        label: "Chaos Incarnate",
        desc: "We are genuinely concerned about you. Also, a little impressed. You are an absolute menace and you wear it well.",
    },
];

function getInterpretation(score) {
    return interpretations.find(i => score >= i.min && score <= i.max)
        || interpretations[interpretations.length - 1];
}

function getBarColor(score) {
    if (score >= 90) return '#7c3aed';
    if (score >= 70) return '#059669';
    if (score >= 50) return '#0ea5e9';
    if (score >= 30) return '#d97706';
    return '#dc2626';
}

let totalChecked = 0;

function updateScore(animate = true) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    totalChecked = [...checkboxes].filter(cb => cb.checked).length;
    const score = 100 - totalChecked;

    const scoreEl    = document.getElementById('score');
    const barEl      = document.getElementById('score-bar');
    const statusEl   = document.getElementById('score-status');

    scoreEl.textContent = score;
    scoreEl.style.color = getBarColor(score);

    if (animate) {
        scoreEl.classList.add('bump');
        setTimeout(() => scoreEl.classList.remove('bump'), 150);
    }

    barEl.style.width      = score + '%';
    barEl.style.background = getBarColor(score);

    if (totalChecked === 0) {
        statusEl.textContent = "Check off everything you've done to see your score.";
    } else {
        const interp = getInterpretation(score);
        statusEl.textContent = `${totalChecked} checked · ${interp.label}`;
    }
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    let globalIndex = 0;

    categories.forEach(cat => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = cat.title;
        container.appendChild(header);

        cat.questions.forEach(qText => {
            globalIndex++;
            const idx = globalIndex;

            const label = document.createElement('label');
            label.className = 'question-item';
            label.htmlFor = `q${idx}`;

            label.innerHTML = `
                <span class="q-num">${idx}</span>
                <input type="checkbox" id="q${idx}" name="q${idx}">
                <span class="q-text">${qText}</span>
            `;

            label.querySelector('input').addEventListener('change', e => {
                label.classList.toggle('is-checked', e.target.checked);
                updateScore();
            });

            container.appendChild(label);
        });
    });
}

function showResults() {
    const score = 100 - totalChecked;
    const interp = getInterpretation(score);

    document.getElementById('result-number').textContent = score;
    document.getElementById('result-badge').textContent  = interp.label;
    document.getElementById('result-desc').textContent   = interp.desc;

    const panel = document.getElementById('results-panel');
    panel.removeAttribute('aria-hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.closest('.question-item').classList.remove('is-checked');
    });

    document.getElementById('results-panel').setAttribute('aria-hidden', 'true');

    totalChecked = 0;
    updateScore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
    updateScore(false);

    document.getElementById('btn-results').addEventListener('click', showResults);
    document.getElementById('btn-reset').addEventListener('click', resetAll);
});
