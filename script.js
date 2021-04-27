//console.log(document);

const span = document.querySelector("#navbar .menu span");
const body = document.querySelector("body");
//console.log(span);
span.onclick = function () {
    //console.log("click")

    if (span.innerHTML == "🐘" ) {
         //cambia a modo obscuro
         body.style.backgroundColor = "#222";
         navbar.style.backgroundColor = "#222";
         span.innerHTML ="🐝"
    }

    else if (span.innerHTML == "🐝") {
        //cambia a modo claro
        body.style.backgroundColor = "#F7F7FF"
        navbar.style.backgroundColor = "#F7F7FF"
        span.innerHTML ="🐘"
    }
    
};

//seleccionar -> transformar/detectar

//backgroundColor
//camel case

//background-color
//kebab case

//background_color
//snake case