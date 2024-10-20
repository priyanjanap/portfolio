
document.addEventListener('DOMContentLoaded', function () {
    var dataText = ["A creative Software Engineer", "UI / UX Designer", "A creative Software Engineer", "FULLSTACK DEVELOPER", "Web Developer"];

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            let letter = text[i];

            // Color specific words while typing
            if (text.includes("Software Engineer") && i >= text.indexOf("Software Engineer")) {
                document.querySelector("h2").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else if (text.includes("Designer") && i >= text.indexOf("Designer")) {
                document.querySelector("h2").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else if (text.includes("DEVELOPER") && i >= text.indexOf("DEVELOPER")) {
                document.querySelector("h2").innerHTML += `<span class="indigo-color">${letter}</span>`;

            } else if (text.includes("Developer") && i >= text.indexOf("Developer")) {
                document.querySelector("h2").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else {
                document.querySelector("h2").innerHTML += letter;
            }

            // Continue typing next letter
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            // Call callback after text is done typing
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText.length) {
            document.querySelector("h2").innerHTML = ""; // Clear previous text
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1); // Proceed to next text after typing
            });
        } else {
            // Reset to the first text after all are done
            setTimeout(function () {
                StartTextAnimation(0);
            }, 1000); // Delay before restarting
        }
    }

    StartTextAnimation(0); // Start the animation loop
});


//
//
//
// document.addEventListener('DOMContentLoaded', function() {
//     // Select the hamburger button inside the glass-container
//     const hamburger = document.getElementById('hamburger');
//     // Select the menu
//     const menu = document.getElementById('hamburger.menu');
//
//     // Add click event listener to the hamburger button
//     hamburger.addEventListener('click', function() {
//         // Toggle the 'open' class on the menu
//         menu.classList.toggle('open');
//
//         // Optional: Adjust hamburger icon's state (add classes for animations)
//         if (menu.classList.contains('open')) {
//             hamburger.classList.add('active'); // Add active state
//         } else {
//             hamburger.classList.remove('active'); // Remove active state
//         }
//     });
// });
//
//
// var div=document.getElementById("hamburger");
//
// var display=0;
//
// function hideAndShow() {
//     if (display==1){
//         div.style.display='block';
//         display=0;
//     }else {
//         div.style.display='none';
//         display=1;
//     }
//
//
// // }
// const hamburger = document.getElementById('hamburger');
// const menu = document.getElementById('menu');
//
// hamburger.addEventListener('click', () => {
//     menu.classList.toggle('open');
// });


//  VanillaTilt.init(document.querySelectorAll(".tilt"), {
//     max: 15,
// });
//
// // Variables
// let imgs = ["assest/pmvbadge.png", "assest/pmvbadge.png", "assest/pmvbadge.png"];
// let logo = ["assest/pmv.png", "assets/pmvbadge.png", "assest/pmv.png"];
// let dates = ["March 2023", "January 2007 - March 2013", "March 2013 - January 2023"];
// let names = ["Institute Of Software Engineering", "Pothuwila Maha Vidyalaya", "Prince Of Wales College"];
// let para = [
//     "In 2021, I started going to IJSE for further education.",
//     "I went to school for the first time at the age of 6 to Pothuwila Navodya School. At the grade of 5, I had to change schools because I passed on scholarship",
//     "I took my O/L and A/L examinations at this school. I passed my O/L exams with 5 A's, 2 B's, and 2 C's. Additionally, I passed my A/L exams with # S's."
// ];
// var index = 0;
//
// document.querySelector("#educationSection>div:first-child>input").addEventListener('click', async () => {
//     const firstImage = document.querySelector("#educationSection>div:nth-child(2)>img:first-child");
//     const secondImage = document.querySelector("#educationSection>div:nth-child(2)>img:nth-child(2)");
//
//     if (index == 0) {
//         firstImage.style.top = "calc(25vh + 5px)";
//         secondImage.style.top = "6vh";
//     } else {
//         firstImage.style.top = "calc(19vh + 4px)";
//         secondImage.style.top = "4vh";
//     }
//
//     secondImage.src = logo[index];
//     secondImage.classList.add("fade");
//
//     firstImage.classList.add("fade");
//     firstImage.src = imgs[index];
//
//     document.querySelector("#educationSection>div:first-child>h3").textContent = dates[index];
//     document.querySelector("#educationSection>div:first-child>h3").classList.add("fade");
//
//     document.querySelector("#educationSection>div:first-child>h1").textContent = names[index];
//     document.querySelector("#educationSection>div:first-child>h1").classList.add("fade");
//
//     document.querySelector("#educationSection>div:first-child>p").textContent = para[index];
//     document.querySelector("#educationSection>div:first-child>p").classList.add("fade");
//
//     if (index == 2) {
//         index = -1;
//     }
//     index++;
//
//     await sleep(1000);
//
//     secondImage.classList.remove("fade");
//     firstImage.classList.remove("fade");
//
//     document.querySelector("#educationSection>div:first-child>h3").classList.remove("fade");
//     document.querySelector("#educationSection>div:first-child>h1").classList.remove("fade");
//     document.querySelector("#educationSection>div:first-child>p").classList.remove("fade");
// });
//
// // Sleep function for delay
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// // Mouse enter and leave events for button
// document.querySelector("#educationSection>div:first-child").addEventListener('mouseenter', () => {
//     document.querySelector("#educationSection>div:first-child>input").classList.add("btn");
// });
//
// document.querySelector("#educationSection>div:first-child").addEventListener('mouseleave', () => {
//     document.querySelector("#educationSection>div:first-child>input").classList.remove("btn");
// });
//
//
//

document.addEventListener('DOMContentLoaded', function () {
    // Function to animate progress bars and show percentage
    function animateProgress(progressElement, percentage) {
        let progressBar = progressElement.querySelector('.progress');
        let percentageLabel = document.createElement('span');
        percentageLabel.classList.add('percentage-label');
        progressElement.appendChild(percentageLabel); // Add the label to the progress bar

        // Set the width of the progress bar with animation
        progressBar.style.transition = 'width 2s ease-out';
        progressBar.style.width = percentage + '%';

        // Update the percentage text as the progress bar fills
        let currentPercentage = 0;
        let interval = setInterval(function () {
            if (currentPercentage <= percentage) {
                percentageLabel.textContent = currentPercentage + '%'; // Update label
                currentPercentage++;
            } else {
                clearInterval(interval); // Stop when the desired percentage is reached
            }
        }, 20); // Adjust the speed of the percentage increase here
    }

    // Add `mouseenter` event listeners for each skill container
    document.querySelectorAll('.skill').forEach(function (skillElement) {
        skillElement.addEventListener('mouseenter', function () { // Use `mouseenter` for the whole skill container
            let progressClass = skillElement.querySelector('.progress');
            if (!progressClass.classList.contains('animated')) { // To avoid repeating the animation
                progressClass.classList.add('animated'); // Mark as animated

                // Check the skill type and set the percentage
                if (skillElement.querySelector('.progress.html')) {
                    animateProgress(skillElement, 80); // HTML - 80%
                } else if (skillElement.querySelector('.progress.css')) {
                    animateProgress(skillElement, 75); // CSS - 75%
                } else if (skillElement.querySelector('.progress.javascript')) {
                    animateProgress(skillElement, 65); // JavaScript - 65%
                } else if (skillElement.querySelector('.progress.mysql')) {
                    animateProgress(skillElement, 60); // MySQL - 60%
                } else if (skillElement.querySelector('.progress.java')) {
                    animateProgress(skillElement, 70); // Java - 70%
                } else if (skillElement.querySelector('.progress.python')) {
                    animateProgress(skillElement, 65); // Python - 65%
                }
            }
        });

        // Optional: Add touch support for mobile devices
        skillElement.addEventListener('touchstart', function () {
            skillElement.dispatchEvent(new Event('mouseenter')); // Trigger same effect on touch
        });
    });
});



// Helper function to add class
function addClass(selector, className) {
    document.querySelectorAll(selector).forEach(function(element) {
        element.classList.add(className);
    });
}

// Helper function to remove class
function removeClass(selector, className) {
    document.querySelectorAll(selector).forEach(function(element) {
        element.classList.remove(className);
    });
}

// Add event listener for mouseenter and mouseleave for each project section
document.querySelectorAll("#projectSection > div > div").forEach(function(divElement, index) {
    divElement.addEventListener('mouseenter', function() {
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > div`, "fadeCir");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > h4`, "textClr");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > h1`, "textClr");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > p`, "textClr");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > img`, "imgClr");
    });

    divElement.addEventListener('mouseleave', function() {
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > div`, "fadeCir");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > h4`, "textClr");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > h1`, "textClr");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > p`, "textClr");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > img`, "imgClr");
    });
});

// Project section source code button events
document.querySelectorAll("#projectSection > div > div > nav").forEach(function(navElement, index) {
    navElement.addEventListener('mouseenter', function() {
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > nav > div:first-child`, "showicon");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > nav > div:nth-child(2)`, "hideText");
        addClass(`#projectSection > div > div:nth-child(${index + 1}) > nav`, "clr");
    });

    navElement.addEventListener('mouseleave', function() {
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > nav > div:first-child`, "showicon");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > nav > div:nth-child(2)`, "hideText");
        removeClass(`#projectSection > div > div:nth-child(${index + 1}) > nav`, "clr");
    });
});
