//console.log(document);

const span = document.querySelector("#navbar .menu span");
//console.log(span);
span.onclick = function () {
    //console.log("click")
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#navbar").style.backgroundColor = "#222";
};
