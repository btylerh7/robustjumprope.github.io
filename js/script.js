var headers = [
    "Hi. I am Tyler Baker, and I am a developer, composer, and musician.",
    "I am currently teaching music and studying front-end development techniques.",
    "Below you will find some example projects that I have created.",
    "If you would like to contact me, please see the information below. Let's work together!",
];



function changeDiv(section) {
    document.getElementById("h1").innerHTML=headers[section];
};

document.getElementById("0").addEventListener("click", function {document.getElementById("h1").innerHTML= headers[0]});
document.getElementById("1").addEventListener("click", changeDiv(1);
document.getElementById("2").addEventListener("click", function {document.getElementById("h1").innerHTML= headers[2]});
document.getElementById("3").addEventListener("click", function {document.getElementById("h1").innerHTML= headers[3]});



