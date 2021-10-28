// site contents
const headers = [
    "Hi. I am Tyler Baker, and I am a developer, composer, and musician.",
    "I am currently teaching music and studying front-end development techniques.",
    "Below you will find some example projects that I have created.",
    "If you would like to contact me, please see the information below. Let's work together!",
];

const images = [
    "images/tyler-baker-photo-1.png"
];

const captions = [
    ["I love helping people learn the language of music!" , "I love to create. Whether it is music arrangements, html emails, or complete programs.", "I love to help others. My job is to help YOUR life easier.",],
    [],
    [],
    [],
];

// functions to create dynamic changing of content
function changeElements (element) {
    document.getElementById('heading').innerHTML = headers[element];
    img = document.getElementById('heading-image');
    img.src = images[element];
    document.getElementById('caption-1').innerHTML = captions[element][0];
    document.getElementById('caption-2').innerHTML = captions[element][1];
    document.getElementById('caption-3').innerHTML = captions[element][2];
};

function updateSite (element) {
    let x = element.id
    document.getElementById(x).addEventListener("click", function () {
        changeElements(x);
    })

}

// makes the nav buttons work
let navlist = document.querySelectorAll("li.navlist");
navlist.forEach(updateSite);