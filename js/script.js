var headers = [
    "Hi. I am Tyler Baker, and I am a developer, composer, and musician.",
    "I am currently teaching music and studying front-end development techniques.",
    "Below you will find some example projects that I have created.",
    "If you would like to contact me, please see the information below. Let's work together!",
];

var images = [

];

var captions = [
    ["I love helping people learn the language of music!" , "I love to create. Whether it is music arrangements, html emails, or complete programs.", "I love to help others. My job is to help YOUR life easier.",],
    [],
    [],
    [],
];

function changeHeader (element) {
    document.getElementById('heading').innerHTML = headers[element];
};
function changeImages (element){
    document.getElementById('image').innerHTML = images[element];
};
function changeCaptions (element) {
    document.getElementById('caption-1').innerHTML = captions[element][0];
    document.getElementById('caption-2').innerHTML = captions[element][1];
    document.getElementById('caption-3').innerHTML = captions[element][2];
};


document.getElementById('0').addEventListener("click", function(){
    changeHeader(0);
    changeCaptions(0);
});
document.getElementById('1').addEventListener("click", function(){
    changeHeader(1);
    changeCaptions(1);
});
document.getElementById('2').addEventListener("click", function(){
    changeHeader(2);
    changeCaptions(2);
});
document.getElementById('3').addEventListener("click", function(){
    changeHeader(3);
    changeCaptions(3);
});