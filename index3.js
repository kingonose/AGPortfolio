document.addEventListener("DOMContentLoaded", function() {
    // Text for the typing effect
    const welcomeText = "Hi, I'm Godsent Asotie.";

    // Typing effect function
    function typeEffect(element, text, speed) {
        let i = 0;
        const typing = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    }

    // Selecting elements and applying typing effect
    const heading = document.querySelector(".welcome-heading");
    const paragraph = document.querySelector(".typing-paragraph");

    // Apply typing effect to heading
    typeEffect(heading, welcomeText, 100);

    // Short paragraph after the h1 with typing effect
    const shortParagraph = "I'm a Designer, Developer and Upcoming AI/Software Engineer passionate about creating amazing designs, AI powered softwares and mobile apps.";
    typeEffect(paragraph, shortParagraph, 50);
});

let ham = document.querySelector('#ham');
let nav = document.querySelector('.navigation');

ham.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('show');
})

